import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import RecommendedProfiles from '../graphql/recommendedProfiles.graphql'

const Home: NextPage = () => {

  const { data, error, loading } = useQuery(RecommendedProfiles)

  if(error){ return (<div>{error.message}</div>) }
  if(loading){ return (<div>Loading....</div>)}
  if(!data){ return (<div>Nothing to show</div>)}

  return (
    <div className='text-red-700'>
      {
        data.recommendedProfiles.map((profile) => (
          <div key={profile.id}>{profile.name}</div>
        ))
      }
    </div>
  )
}

export default Home
