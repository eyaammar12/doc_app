export const BASE_URL = "http://localhost:5000/api/v1";

// Export a function to dynamically get the token
export const getToken = () => {
  const rawToken = localStorage.getItem("token");
  return rawToken ? rawToken.replace(/"/g, "") : null; // Clean token if needed
};
