import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setUser(null);
    setShowDropdown(false);
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex flex-wrap justify-between items-center">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold">GraboBite</h1>

        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-yellow-300">
          Contact
        </Link>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 bg-white rounded px-2 py-1 text-black"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="outline-none px-2"
        />
        <button type="submit" className="text-gray-800 hover:text-yellow-500">
          🔍
        </button>
      </form>

      {user ? (
        <div className="relative flex items-center gap-4">
          <span className="text-green-400">Hi {user.name} 👋</span>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-yellow-300"
            >
              Profile ⏷
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg z-10">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <Link to="/cart" className="hover:text-yellow-300">
            Cart
          </Link>
        </div>
      ) : (
        <div className="flex gap-4">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-yellow-300"
            >
              Login ⏷
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg z-10">
                <button
                  onClick={() => {
                    navigate("/login-customer");
                    setShowDropdown(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Customer Login
                </button>
                <button
                  onClick={() => {
                    navigate("/login-owner");
                    setShowDropdown(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Owner Login
                </button>
                <button
                  onClick={() => {
                    navigate("/login-delivery");
                    setShowDropdown(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Delivery Login
                </button>
              </div>
            )}
          </div>

          <Link to="/register" className="hover:text-yellow-300">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
