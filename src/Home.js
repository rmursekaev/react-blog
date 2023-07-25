import Feed from "./Feed"

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="Home">
      {isLoading && <img src='/loading.gif' alt='loading' className="loading"/>}
      {!isLoading && fetchError && <p className="statusMsg" style={{color: 'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className="statusMsg">No posts found.</p>)}
    </main>
  )
}

export default Home