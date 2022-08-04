import apolloClient from "../api/api"
import RecommendedProfiles from '../../graphql/recommendedProfiles.graphql'
import GetProfiles from '../../graphql/getProfile.graphql'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"

const Profile = () => {

    const router = useRouter()
    const { id } = router.query

    const { data, loading, error } = useQuery(GetProfiles, {variables: {id}})

    if(loading){ return <div>...Loading...</div>}
    if(error){ return <div>error</div>}
    if(!data){ return <div>Nothing to show</div>}

    return (
        <div>
        {
            data.profiles.items[0].name
        }
        </div>
    )
}

export default Profile
