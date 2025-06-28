import BlogPost from "../components/BlogPost";

export default function HomePage({ blogs, onDelete, search }) {
  const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      {
        filteredBlogs.map(blog => 
          <BlogPost key={blog.id} blog={blog} onDelete={onDelete} />
        )
      }
    </div>
  )
}