import authApi from "../api/authApi";

export const login = async (email, password) => {
  try {
    const response = await authApi.loginApi(email, password);
    localStorage.setItem(`token`, response.data.accessToken);
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

export const register = async (username, phone, email, password) => {
  try {
    const response = await authApi.registerApi(
      username,
      phone,
      email,
      password
    );
    console.log(response);
    localStorage.setItem(`token`, response.data.accessToken);
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

export const logOut = async () => {
  try {
    const response = await authApi.logOutApi();
    console.log(response);
    localStorage.removeItem("token", response.data.accessToken);
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};
