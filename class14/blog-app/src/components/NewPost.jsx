import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function NewPost({onAdd}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author.trim()) {
      alert('Please provide valid data');
      return;
    }
    const id = uuidv4();
    onAdd({
      id, title, content, author, postedOn: new Date()
    });

    setTitle('')
    setContent('');
    setAuthor('');
    navigate('/');
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Blog Title</label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Blog title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Blog Content</label>
        <textarea
          placeholder="Your blog content goes here..."
          id="content"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900">Blog Author</label>
        <input
          type="text"
          id="author"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your name"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        text="Add Blog" theme={{textColor: "text-white", bg: "bg-blue-600"}}
      />
    </form>
  )
}