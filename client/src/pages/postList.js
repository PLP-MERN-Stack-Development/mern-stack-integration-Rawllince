import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const PostList = () => {
  const { posts, loading } = useContext(PostContext);

  if (loading) return <p className="text-center">Loading posts...</p>;
  if (posts.length === 0) return <p className="text-center">No posts found.</p>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-700 mt-2">{post.content}</p>
          <p className="text-sm text-gray-500 mt-2">By {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
