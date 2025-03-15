import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LeaveRequests = () => {
  const [leaves, setLeaves] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9000/api/leave-requests")
      .then((res) => res.json())
      .then((data) => setLeaves(data))
      .catch((err) => console.error("Error fetching leave requests:", err));
  }, []);

  return (
    <div className="leave-container">
      <h2>Leave Requests</h2>
      <button className="login-btn" onClick={() => navigate("/login")}>
        Login
      </button>
      {leaves.length === 0 ? (
        <p>No leave requests available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Reason</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave._id}>
                {/* If you populated userId in the backend, you can display leave.userId.username */}
                <td>{leave.userId.username || leave.userId}</td>
                <td>{leave.reason}</td>
                <td>{new Date(leave.startDate).toLocaleDateString()}</td>
                <td>{new Date(leave.endDate).toLocaleDateString()}</td>
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaveRequests;
