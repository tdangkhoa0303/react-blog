import axios from "axios";

const fetchData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
