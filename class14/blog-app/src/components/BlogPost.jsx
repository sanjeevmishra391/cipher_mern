import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BlogPost({ blog, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <p className="text-gray-700 mt-2">{blog.content}</p>
      <p className="text-sm text-right italic mt-2">- {blog.author}</p>
      <p className="text-sm text-right italic mt-2">{blog.postedOn.toString()}</p>
      <div className="mt-2 space-x-2">
        <Button text="Edit" clickFunc={() => navigate(`/edit/${blog.id}`)} theme={{textColor: "text-white", bg: "bg-blue-600"}} />
        <Button text="Delete" clickFunc={() => onDelete(blog.id)} theme={{textColor: "text-white", bg: "bg-red-600"}} />
      </div>
    </div>
  )
}