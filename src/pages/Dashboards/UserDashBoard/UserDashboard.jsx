import { useEffect, useState } from "react";
import { validateToken } from "../../../services/authService"; // Import validateToken function

const UserDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false); // To store token validity
  const [error, setError] = useState(""); // Error state

  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await validateToken();
        setValid(true);

        // Get user from localStorage
        const userData = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userData);
      } catch (error) {
        setError("Invalid or expired token. Please log in again.");
        setValid(false);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state until validation is done
  }

  if (error) {
    return <div>{error}</div>; // Show error message if token is invalid
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to User Dashboard</h1>
      {user && (
        <p className="mt-4 text-lg text-gray-700">
          Hello,{" "}
          <span className="font-semibold text-green-600">{user.name}</span> 👋
        </p>
      )}
    </div>
  );
};

export default UserDashboard;
