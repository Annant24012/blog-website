import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBlog } from "../store/blogSlice";
import toast from "react-hot-toast";
import "./BlogDetailsPage.css"; // Import the CSS file

const BlogDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((b) => b.id === id);
  const dispatch = useDispatch();

  if (!blog) return <div>Blog not found</div>;

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    toast.success("Blog deleted successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="heading">{blog.title}</h1>
      <p className="description">{blog.description}</p>
      <p className="meta">
        <span>Category: {blog.category}</span>
        <span>Tags: {blog.tags}</span>
      </p>
      <div className="button-container">
        <button onClick={() => navigate("/")} className="back-button">
          Back to Home
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete Blog
        </button>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
