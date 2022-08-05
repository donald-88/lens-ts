import GetProfiles from '../../graphql/getProfile.graphql'
import ExplorePublications from '../../graphql/explorePublications.graphql'
import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client"

const Profile = () => {

    const router = useRouter()
    const { id } = router.query

    const { data: profileData, loading: profileLoad, error: profileError } = useQuery(GetProfiles, {variables: {id}})
    const { data: pubData, loading: pubLoad, error: pubErr } = useQuery(ExplorePublications, {variables: { id }})

    if(profileLoad){ return <div>...Loading...</div>}
    if(profileError){ return <div>error</div>}
    if(!profileData){ return <div>Nothing to show</div>}
    const profile = profileData.profiles.items[0]


    if(pubLoad){ return <div>...Loading</div>}
    if(pubErr){ return <div>Error</div>}
    if(!pubData){ return <div>No Posts Yet</div>}
    const pubs = pubData.explorePublications.items

    

    return (
        <div>
            <h3>{profile.name}</h3>
            <p>{profile.handle}</p>
            <p>{profile.bio}</p>

            <div>
                <p>Followers {profile.stats.totalFollowers}</p>
                <p>Following {profile.stats.totalFollowing}</p>
                <p>Posts {profile.stats.totalPublications}</p>
            </div>
            

            <div>
                <button>Follow</button>
                <button>Connect</button>
            </div>

            <div>
                
            </div>
        <div>
            {
                pubs.map((pub, index) => (
                    <div key={index}>
                        {
                            pub.metadata.content
                        }
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Profile
