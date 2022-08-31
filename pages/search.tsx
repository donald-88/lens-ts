import SearchBar from "../components/searchBar"
import SearchResult from "../components/searchResult"

const Search = () => {
    return (
        <div className="px-4">
            <div className="h-8"/>
            <SearchBar/>
            <SearchResult image="/empty.jpg"/>
            <SearchResult image="/empty.jpg"/>
            <SearchResult image="/empty.jpg"/>
            <p className="text-center font-bold">See all results</p>
        </div>
        
    )
}

export default Search