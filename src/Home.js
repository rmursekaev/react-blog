import Feed from "./Feed"
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  
  return (
    <main className="Home">
      {isLoading && <img src='/loading.gif' alt='loading' className="loading"/>}
      {!isLoading && fetchError && <p className="statusMsg" style={{color: 'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className="statusMsg">No posts found.</p>)}
    </main>
  )
}

export default Home