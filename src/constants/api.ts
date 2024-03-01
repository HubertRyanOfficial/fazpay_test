import axios from "axios";

const api = axios.create({
  baseURL: "https://65e0b9b8d3db23f76249f24d.mockapi.io/fazpay",
  timeout: 5000, // Timeout de 5 segundos para todas as solicitações
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
