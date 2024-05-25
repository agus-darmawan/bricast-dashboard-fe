import axios from './axios';

export const login = async (email: string, password: string) => {
  const response = await axios.post('auth/login', { email, password });
  return response.data;
};

export const register = async (
  email: string,
  password: string,
  password_confirmation: string
) => {
  console.log(email, password, password_confirmation);
  const response = await axios.post('auth/register', {
    email,
    password,
    password_confirmation
  });
  console.log(response.data.message);
  return response;
};

export const forgotPassword = async (email: string) => {
  const response = await axios.post('auth/password/forgot', { email });
  return response.data;
};
