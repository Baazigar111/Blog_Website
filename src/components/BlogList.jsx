import { Link } from "react-router-dom";
import blogs from "../blog/blogs";

function BlogList() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white shadow-sm p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">{blog.title}</h2>
          <p className="text-sm text-gray-400">{blog.date}</p>
          <p className="mt-2 text-gray-700">{blog.summary}</p>
          <Link
            to={`/post/${blog.id}`}
            className="text-blue-500 mt-3 inline-block hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
