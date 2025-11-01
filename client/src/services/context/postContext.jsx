import React, { createContext, useState, useEffect } from "react";
import { getAllPosts, createNewPost } from "../services/postService";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load posts on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const data = await getAllPosts();
    setPosts(data);
    setLoading(false);
  };

  const addPost = async (newPost) => {
    const saved = await createNewPost(newPost);
    setPosts([saved, ...posts]);
  };

  return (
    <PostContext.Provider value={{ posts, loading, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
