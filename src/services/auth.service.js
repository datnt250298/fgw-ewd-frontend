import axios from "axios";

const API_URL = "http://localhost:8080/";

const login = async (email, password) => {
    const response = await axios.post(API_URL + "signin", { email, password });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };


const AuthService = {
    login,
    // logout,
    // register,
    // loginAdmin,
  };
  
  export default AuthService;