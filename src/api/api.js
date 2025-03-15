import axios from "axios";

const API_URL = "http://localhost:9000/api"; 

export const registerUser = (userData) => axios.post(`${API_URL}/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/login`, userData);
export const submitLeave = (leaveData, token) => 
  axios.post(`${API_URL}/leave`, leaveData, { headers: { Authorization: `Bearer ${token}` } });

export const getLeaveRequests = (token) => 
  axios.get(`${API_URL}/leave`, { headers: { Authorization: `Bearer ${token}` } });
