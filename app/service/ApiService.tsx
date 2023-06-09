import axios from '../middleware/AxiosInterceptor';
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getAllUsers = async () => {
  const URL = `${API_URL}/users`;
  const response = await axios.get(URL);
  return response;
}