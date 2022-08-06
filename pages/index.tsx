import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import RecommendedProfiles from '../graphql/recommendedProfiles.graphql'
import ExplorePublications from '../graphql/explorePublications.graphql'
import Link from 'next/link'

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
    <div className='space-y-4'>
      {
        profileData.recommendedProfiles.map((profile) => (
          <Link key={profile.id} href={`/profile/${profile.id}`}>
            <div>{profile.name}</div>
          </Link>
          
        ))
        
        
      }
      
      <div className="space-y-4">
        {
            pubData.explorePublications.items.map((pub) => (
          <div key={pub.id}>
            <p>{pub.profile.name}</p>
            <p>{pub.profile.handle}</p>
            <p>{pub.metadata.content}</p>
            <div>
                <p>Collects {pub.stats.totalAmountOfCollects}</p>
                <p>Comments {pub.stats.totalAmountOfComments}</p>
                <p>Mirrors {pub.stats.totalAmountOfMirrors}</p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Home
