import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";
import { DataProvider } from "./context/DataContext";

function App() {
    const setPosts = useStoreActions((actions) => actions.setPosts);
    const { data, fetchError, isLoading } = useAxiosFetch(
        "http://localhost:3500/posts"
    );

    // Fetch Data
    useEffect(() => {
        setPosts(data);
    }, [data, setPosts]);

    return (
      <DataProvider>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <Home isLoading={isLoading} fetchError={fetchError} />
                    }
                />
                <Route path="post" element={<NewPost />} />
                <Route path="post/:id" element={<PostPage />} />
                <Route path="edit/:id" element={<EditPost />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
      </DataProvider>
    );
}

export default App;
