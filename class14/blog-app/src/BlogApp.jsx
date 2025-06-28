import { useState } from 'react';
import './App.css'
import NewPostPage from './pages/NewPostPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EditPost from './components/EditPost';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function BlogApp() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');

  const addBlog = (blog) => {
    setBlogs((prevBlogs) => [blog, ...prevBlogs]);
  }

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  }

  const updateBlog = (updateBlog) => {
    setBlogs(blogs.map(blog => blog.id === updateBlog.id ? updateBlog : blog));
  }

  return (
    <>
      <AuthProvider>
        <Header />
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='border rounded-md mb-4'
        />
        
        <Routes>
          <Route path="/" element={<HomePage blogs={blogs} onDelete={deleteBlog} search={search} />} />
          <Route path="/new" element={
            <ProtectedRoute>
              <NewPostPage addBlog={addBlog} />
            </ProtectedRoute>
          } />
          <Route path="/edit/:blogId" element={
            <ProtectedRoute>
              <EditPost blogs={blogs} onUpdate={updateBlog} />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default BlogApp
