import { useQuery } from "@apollo/client"
import SearchBar from "../components/searchBar"
import SearchResult from "../components/searchResult"
import SearchProfile from '../graphql/searchProfile.graphql'

import Link from "next/link"
import { useState } from "react"

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const { data: searchData, error: searchError, loading: searchLoading} = useQuery(SearchProfile,{variables: {query: searchTerm}})

    if(searchError){ return (<div>{searchError.message}</div>) }
  if(searchLoading){ return (<div>Loading....</div>)}
  if(!searchData){ return (<div>Nothing to show</div>)}


    return (
        <div className="px-4">
            <div className="h-8"/>
            <SearchBar onChange={event => setSearchTerm(event.target.value)} value={searchTerm}/>
            {
                searchData.search.items.map((search, index) => (
                    <Link key={index} href={`/profile/${search.profile.id}`}>
                        <a>
                            <SearchResult name={search.profile.name? (search.profile.name) : ('blank')} handle={search.profile.handle} image='/empty.jpg'/>
                        </a>
                    </Link>
                ))
            }
        </div>
        
    )
}

export default Search