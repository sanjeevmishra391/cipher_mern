import NewPost from "../components/NewPost";

export default function NewPostPage({addBlog}) {
  return (
    <div>
      <h2 className="text-3xl max-w-sm mx-auto py-4">Create a new blog</h2>
      <NewPost onAdd={addBlog} />
    </div>
  )
}