import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

export default function EditPost({blogs, onUpdate}) {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find(blog => blog.id === blogId);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [author, setAuthor] = useState(blog.author);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author.trim()) {
      alert('Please provide valid data');
      return;
    }
    onUpdate({ id: blog.id, title, content, author, postedOn: new Date() });
    navigate("/");
  }

  return (
    <div>
      <h2 className="text-3xl max-w-sm mx-auto py-4">
          Edit Post
      </h2>
      <form className="max-w-sm mx-auto" onSubmit={handleUpdate}>
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
            text="Edit Blog" theme={{textColor: "text-white", bg: "bg-blue-600"}}
          />
      </form>
    </div>
  )
}

// 