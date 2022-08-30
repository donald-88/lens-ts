import { useQuery } from "@apollo/client"
import Image from 'next/image'
import { useRouter } from 'next/router'
import Avatar from "../../components/avatar"
import PostCard from "../../components/postCard"
import PrimaryButton from "../../components/primaryButton"
import SecondaryButton from "../../components/secondaryButton"
import ExplorePublications from '../../graphql/explorePublications.graphql'
import GetProfiles from '../../graphql/getProfile.graphql'

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
        <>
        <div>
            <div className='flex flex-col items-center w-full h-[170px]'>
                <div className="w-full h-[140px] bg-accent overflow-hidden relative">
                    {
                        profile.coverPicture ? (
                            <Image src={profile.coverPicture.original.url} layout='fill' objectFit='cover'/>
                        ) : (
                            <div className="bg-black h-full w-full"/>
                        )
                    }
                </div>
                <div className="w-[70px] h-[70px] -mt-[35px]">
                    <Avatar>
                        {
                            profile.picture ? (
                                <Image src={profile.picture.original.url} width="70px" height="70px"/>
                            ) : (
                                <div className="w-40 h-40 bg-black"/>
                            )
                        }
                    </Avatar>
                </div>
                <div>

                </div>
            </div>

            <div className="w-full text-center">
                <h3>{profile.name}</h3>
                <p className="text-accent">{profile.handle}</p>
                <p>{profile.bio}</p>
            </div>
            <div className="w-full flex justify-evenly">
                <div className="text-center">
                    <h3>{profile.stats.totalFollowers}</h3>
                    <p className="text-accent">Followers</p>
                </div>

                <div className="text-center">
                    <h3>{profile.stats.totalFollowing}</h3>
                    <p className="text-accent">Following</p>
                </div>

                <div className="text-center">
                    <h3>{profile.stats.totalPublications}</h3>
                    <p className="text-accent">Following</p>
                </div>
            </div>
            

            <div className="w-full flex justify-center space-x-2">
                <PrimaryButton/>
                <SecondaryButton/>
            </div>

            <div className="flex justify-evenly">
                <p>Posts</p>
                <p>Mirrors</p>
                <p>Collection</p>
                <p>Media</p>
            </div>
        <div>
            {
                pubs.map((pub, index) => (
                    <div key={index}>
                        <PostCard key={pub.profile.id} image={'/empty.jpg'} name={pub.profile.name} handle={pub.profile.handle} content={pub.metadata.content} mirrors={pub.stats.totalAmountOfMirrors} collects={pub.stats.totalAmountOfCollects} comments={pub.stats.totalAmountOfComments}/>
                    </div>
                ))
            }
        </div>
        </div>
        </>
    )
}

export default Profile
