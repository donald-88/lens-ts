import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import RecommendedProfiles from '../graphql/recommendedProfiles.graphql'
import ExplorePublications from '../graphql/explorePublications.graphql'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../components/avatar'
import ProfileCard from '../components/profileCard'
import PostCard from '../components/postCard'

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
        <div className='relative flex'>
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
        <div className="space-y-4">
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
