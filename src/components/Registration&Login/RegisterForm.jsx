import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterLogin.css";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    role: "user", 
    name: "",
    email: "",
    password: "",
    restaurantName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);

    if (formData.role === "user") navigate("/user-dashboard");
    else if (formData.role === "owner") navigate("/owner-dashboard");
    else navigate("/delivery-dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700">Select Role:</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange}
            className="w-full p-3 mt-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="owner">Restaurant Owner</option>
            <option value="delivery">Delivery Boy</option>
          </select>

          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            value={formData.name} 
            onChange={handleChange} 
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formData.role === "owner" && (
            <input 
              type="text" 
              name="restaurantName" 
              placeholder="Restaurant Name" 
              value={formData.restaurantName} 
              onChange={handleChange} 
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <button 
            type="submit" 
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate("/")} 
            className="text-blue-500 hover:underline"
          >
            Back to Home
          </button>
          <p className="mt-2 text-gray-600">
            Already have an account?{" "}
            <span 
              onClick={() => navigate("/login")} 
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <button className="w-1/3 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          <FaFacebook />
          </button>
          <button className="w-1/3 p-2 bg-red-600 text-white rounded-full hover:bg-red-700">
          <FaGoogle />
          </button>
          <button className="w-1/3 p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
          <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
