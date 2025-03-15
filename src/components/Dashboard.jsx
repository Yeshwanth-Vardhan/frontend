import { useState, useEffect } from "react";
import { submitLeave, getLeaveRequests } from "../api/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [leave, setLeave] = useState({ reason: "", startDate: "", endDate: "" });
  const [leaveRequests, setLeaveRequests] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/login");
    getLeaveRequests(token).then(({ data }) => setLeaveRequests(data)).catch(() => alert("Error fetching leave requests"));
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitLeave(leave, token);
      alert("Leave request submitted!");
      setLeaveRequests([...leaveRequests, leave]);
    } catch (error) {
      alert(error.response?.data?.error || "Submission failed");
    }
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Reason" value={leave.reason} onChange={(e) => setLeave({ ...leave, reason: e.target.value })} required />
        <input type="date" value={leave.startDate} onChange={(e) => setLeave({ ...leave, startDate: e.target.value })} required />
        <input type="date" value={leave.endDate} onChange={(e) => setLeave({ ...leave, endDate: e.target.value })} required />
        <button type="submit">Submit Leave Request</button>
      </form>

      <h3>My Leave Requests</h3>
      <ul>
        {leaveRequests.map((req, index) => (
          <li key={index}>{req.reason} (From {req.startDate} to {req.endDate}) - {req.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
