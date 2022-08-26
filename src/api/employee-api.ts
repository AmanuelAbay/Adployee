import axios from "axios";

const employeeApi = axios.create({
  baseURL: "/api/",
});

export default employeeApi;
