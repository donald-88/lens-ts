import { useQuery } from "@apollo/client"
import SearchBar from "../components/searchBar"
import SearchResult from "../components/searchResult"
import SearchProfile from '../graphql/searchProfile.graphql'

import Link from "next/link"
import { useState } from "react"
import Loader from "../components/loader"

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const { data: searchData, error: searchError, loading: searchLoading} = useQuery(SearchProfile,{variables: {query: searchTerm}})

    if(searchError){ return (<div>{searchError.message}</div>) }
  if(searchLoading){ return (<Loader/>)}
  if(!searchData){ return (<div>Nothing to show</div>)}


    return (
        <div className="px-4">
            <div className="h-8"/>
            <SearchBar onChange={event => setSearchTerm(event.target.value)} value={searchTerm}/>
            { 
                searchData.search.items.map((post, index) => (
                    <Link key={index} href={`/profile/${post.profile.id || post.profile.profileId}`}>
                        <a>
                            <SearchResult name={post.profile.name? (post.profile.name) : ('blank')} handle={post.profile.handle} image='/empty.jpg'/>
                        </a>
                    </Link>
                ))
            }
        </div>
        
    )
}

export default Search