function SearchInput(props) {
    const { handleOnChange, searchQuote} = props;
    return (
        <>
            <label htmlFor="search">Keresés:</label>
            <input type="text" onChange={handleOnChange} value={searchQuote} id="search" />
        </>
    );
}

export default SearchInput;