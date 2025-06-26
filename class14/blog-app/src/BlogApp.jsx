import { useState } from 'react';
import './App.css'
import NewPost from './components/NewPost'

function BlogApp() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs((prevBlogs) => [blog, ...prevBlogs]);
  }

  console.log(blogs);

  return (
    <>
      <NewPost onAdd={addBlog} />
    </>
  )
}

export default BlogApp
