import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">My Blog</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
