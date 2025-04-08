import { useEffect, useState } from "react";
import { validateToken } from "../../../services/authService";  // Import validateToken function

const DeliveryDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);  // To store token validity
  const [error, setError] = useState("");  // Error state

  useEffect(() => {
    const checkToken = async () => {
      try {
        await validateToken();  // Call validateToken API
        setValid(true);  // If token is valid, set valid state to true
      } catch (error) {
        setError("Invalid or expired token. Please log in again.");
        setValid(false);
      } finally {
        setLoading(false);  // Stop loading once check is complete
      }
    };

    checkToken();  // Validate token on page load
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading state until validation is done
  }

  if (error) {
    return <div>{error}</div>;  // Show error message if token is invalid
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Delivery Dashboard </h1>
      <p className="mt-4 text-lg text-gray-700">
        Hello,{" "}
        <span className="font-semibold text-green-600">
          {localStorage.getItem("userInfo")?.email}
        </span>{" "}
        👋
      </p>
    </div>
  );
};

export default DeliveryDashboard;
