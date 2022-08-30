import axios from "axios";

const employeeApi = axios.create({
  baseURL: "https://employee--api.herokuapp.com/api/",
});

export default employeeApi;
