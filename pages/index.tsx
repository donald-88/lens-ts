import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import RecommendedProfiles from '../graphql/recommendedProfiles.graphql'
import ExplorePublications from '../graphql/explorePublications.graphql'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../components/avatar'
import ProfileCard from '../components/profileCard'
import PostCard from '../components/postCard'


const notification = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

)
const Home: NextPage = () => {

  const { data: profileData, error: profileError, loading: profileLoading} = useQuery(RecommendedProfiles)
  const { data: pubData, error: pubError, loading: pubLoading} = useQuery(ExplorePublications)

  if(profileError){ return (<div>{profileError.message}</div>) }
  if(profileLoading){ return (<div>Loading....</div>)}
  if(!profileData){ return (<div>Nothing to show</div>)}

  if(pubError){ return (<div>{pubError.message}</div>) }
  if(pubLoading){ return (<div>Loading....</div>) }
  if(!pubData){ return (<div>Nothing to show</div>) }

  return (
    <>
        <div className='flex justify-between items-center p-4'>
            <h1>LensApp</h1>
            <div>{notification}</div>
        </div>
        <div className='px-4 py-2'>
            <h2>Recommended</h2>
        </div>
        <div className='relative flex items-center'>
            <div className='overflow-x-scroll no-scrollbar scroll whitespace-nowrap scroll-smooth'>
                {
                    profileData.recommendedProfiles.map((profile) => (
                    <Link key={profile.id} href={`/profile/${profile.id}`}>
                        <a>
                            <ProfileCard name={profile.name? (profile.name) : ('blank')} image='/empty.jpg'/>
                        </a>
                    </Link>
                    ))
                }
            </div>
        </div>
        <div className='px-4 py-2'>
            <h2>Explore</h2>
        </div>
        <div>
            {
                pubData.explorePublications.items.map((pub) => (
            <PostCard key={pub.profile.id} image={'/empty.jpg'} name={pub.profile.name} handle={pub.profile.handle} content={pub.metadata.content} mirrors={pub.stats.totalAmountOfMirrors} collects={pub.stats.totalAmountOfCollects} comments={pub.stats.totalAmountOfComments}/>
            ))
            }
        </div>
    </>
  )
}

export default Home
