import Feed from "./Feed"

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts}/>
      ) : (
        <p style={{ amrginTop: "2rem"}}>No posts yet!</p>
      )}
    </main>
  )
}

export default Home