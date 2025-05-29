export const BASE_URL = "https://doc-app-backend-ns5z.onrender.com";

// Export a function to dynamically get the token
export const getToken = () => {
  const rawToken = localStorage.getItem("token");
  return rawToken ? rawToken.replace(/"/g, "") : null; // Clean token if needed
};
