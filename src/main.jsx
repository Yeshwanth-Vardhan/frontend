import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import LeaveRequests from "./components/LeaveRequest"
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1 className="title">Leave Management</h1>
        <nav>
          <Link to="/">Register</Link> | 
          <Link to="/login">Login</Link> |  |
          <Link to="/leave-requests">Leave Requests</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leave-requests" element={<LeaveRequests />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
