import { useParams } from "react-router-dom";
import blogs from "../blog/blogs";

function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center mt-10 text-red-500">
        Blog post not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-blue-700">{blog.title}</h1>
      <p className="text-sm text-gray-400">{blog.date}</p>
      <div className="mt-4 text-gray-800 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}

export default BlogPost;
