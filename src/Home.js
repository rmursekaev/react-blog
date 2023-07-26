import Feed from "./Feed"
import { useStoreState } from 'easy-peasy'


const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState(state => state.searchResults)
  
  return (
    <main className="Home">
      {isLoading && <img src='/loading.gif' alt='loading' className="loading"/>}
      {!isLoading && fetchError && <p className="statusMsg" style={{color: 'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className="statusMsg">No posts found.</p>)}
    </main>
  )
}

export default Home