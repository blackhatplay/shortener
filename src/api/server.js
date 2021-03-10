import axios from "axios";

export default axios.create({
  baseURL: "https://shortner-backend.herokuapp.com",
});
