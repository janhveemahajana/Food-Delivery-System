import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    role: "CUSTOMER", // used only for redirect, not sent to backend
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://user-service-6eg1.onrender.com/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Login Successful:", response.data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));

      const role = formData.role; // use selected role for redirection

      if (role === "CUSTOMER") {
        navigate("/user-dashboardpage");
      } else if (role === "OWNER") {
        navigate("/owner-dashboard");
      } else if (role === "DELIVERY") {
        navigate("/delivery-dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold">Select Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="CUSTOMER">Customer</option>
            <option value="OWNER">Restaurant Owner</option>
            <option value="DELIVERY">Delivery Boy</option>
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
            className={`p-2 rounded-lg text-white transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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
          <button className="w-10 h-10 p-3 flex items-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200">
            <FaFacebook />
          </button>
          <button className="w-10 h-10 p-3 flex items-center bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200">
            <FaGoogle />
          </button>
          <button className="w-10 h-10 p-3 flex items-center bg-blue-400 text-white rounded-full hover:bg-blue-500 transition duration-200">
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
