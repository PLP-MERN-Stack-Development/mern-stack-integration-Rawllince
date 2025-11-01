import React from "react";
import { PostProvider } from "./context/PostContext";
import PostList from "./pages/PostList";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <PostProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">MERN Blog</h1>
        <CreatePost />
        <PostList />
      </div>
    </PostProvider>
  );
};

export default App;
