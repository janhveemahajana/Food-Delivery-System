import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    role: "user",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged In:", formData);

    if (formData.role === "user") navigate("/user-dashboard");
    else if (formData.role === "owner") navigate("/owner-dashboard");
    else navigate("/delivery-dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold">Select Role:</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="owner">Restaurant Owner</option>
            <option value="delivery">Delivery Boy</option>
          </select>

          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
          
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />

          <button 
            type="submit" 
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Forgot Password?{" "}
            <span 
              onClick={() => navigate("/forgot-password")} 
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Reset here
            </span>
          </p>
          
          <p className="mt-2 text-gray-600">
            Don't have an account?{" "}
            <span 
              onClick={() => navigate("/register")} 
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button className="w-1/3 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200">
            <FaFacebook />
          </button>
          <button className="w-1/3 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200">
          <FaGoogle />
          </button>
          <button className="w-1/3 p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition duration-200">
          <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
