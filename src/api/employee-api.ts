import axios from "axios";

const employeeApi = axios.create({
  baseURL: "https://adployee-backend.onrender.com/api/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export default employeeApi;
