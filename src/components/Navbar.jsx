import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">FoodieExpress</h1>
      <div className="flex gap-4">
        <Link to="/login" className="hover:text-yellow-300">Login</Link>
        <Link to="/register" className="hover:text-yellow-300">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
