import axios from "axios"

const API_URL = process.env.REACT_APP_API_SERVER_DISTANT;

// console.log(process.env.REACT_APP_API_SERVER_DISTANT)

const login = async (userData) => {
    const config = {
        headers: {
          "Content-type": "application/json",
        }
    }
    console.log(userData)
    const response = await axios
        .post(API_URL + "/api/v1/auth/login", userData, config)
        .then((rpns) => {
            return rpns.data
        })
        .catch((error) => {
            if (error.response){
                return error.response;
            }
        });

        if (response.data) {
          delete response.config;
          delete response.request;
          //delete response.headers;
          return response;
        } else {
          return response;
        }
}

//register
const register = async (data) => {
  
  const response = await axios.post(
    API_URL + "/api/v1/auth/register",
    data
  );

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data;
  } else {
    return response;
  }
}

const authService = {
    login,
    register,
}

export default authService;