import { useState, useEffect } from 'react';
import QuoteList from './QuoteList';
import SearchInput from './SearchInput';

function App() {
    const [searchQuote, setSearchQuote] = useState('');
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams();
        queryParams.set('dialog', `/${searchQuote}/i` );
        queryParams.set('limit', 10);
        const timeoutId = setTimeout(async () => {
            const quoteResponse = await fetch('https://the-one-api.dev/v2/quote?' + queryParams.toString(),{
                headers: {
                    Authorization: "Bearer BnLA_bZc7v5wTm_ECK1J"
                }
            });
            const quoteData = await quoteResponse.json();

            const characters = new Set();
            quoteData.docs.forEach(quote => {
                if(!characters.has(quote.character)) {
                    characters.add(quote.character, quote.character);
                }
            });
            const idQueryParam = new URLSearchParams();
            idQueryParam.set('_id', Array.from(characters.values()).join(','));

            const characterResponse = await fetch('https://the-one-api.dev/v2/character?' + idQueryParam.toString(), {
                headers: {
                    Authorization: "Bearer BnLA_bZc7v5wTm_ECK1J"
                }
            });
            const charactersData = await characterResponse.json();
            const characterNameMap = new Map();
            charactersData.docs.forEach(character => {
                characterNameMap.set(character._id, character.name);
            });

            quoteData.docs = quoteData.docs.map(quote => {
                return {...quote, name: characterNameMap.get(quote.character)}
            });
            setQuotes(quoteData.docs);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchQuote]);


    function handleSearchInputChange(event) {
        setSearchQuote(event.target.value);
    }

    return (
        <main>
            <SearchInput handleOnChange={handleSearchInputChange} searchQuote={searchQuote} />
            <QuoteList quotes={quotes} />
        </main>
    );
}

export default App;