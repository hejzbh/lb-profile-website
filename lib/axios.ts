import axios from "axios";

export const API = axios.create({
  baseURL: "https://lbprofile.blueduck.at/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
