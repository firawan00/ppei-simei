import axios from "axios";
export const fetcher = async (param) => {
  try {
    const res = await axios(param);
    return res.data;
  } catch (error) {
    return error;
  }
};
