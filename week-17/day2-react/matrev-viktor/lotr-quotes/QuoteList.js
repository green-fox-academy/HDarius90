function QuoteList(props) {
    const { quotes } = props;
    return (
        <ul>
            {quotes.map(quote => (
                <li key={quote._id}>
                    "{quote.dialog}" - {quote.name}
                </li>
            ))}
        </ul>
    );
}

export default QuoteList;