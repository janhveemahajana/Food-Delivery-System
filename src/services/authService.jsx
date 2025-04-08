import axios from "axios";

const API_URL = "https://user-service-6eg1.onrender.com/auth/validate";

export const validateToken = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Token validation failed");
  }
};
