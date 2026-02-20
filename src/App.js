import React, { useState } from "react";
import SpeechAnalyzer from "./components/SpeechAnalyzer";
import "./styles.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const App = () => {
  const [page, setPage] = useState("interview");
  const [history, setHistory] = useState([]);

  // 📊 Calculate average score
  const avgScore =
    history.length > 0
      ? Math.round(
          history.reduce((sum, item) => sum + item.score, 0) /
            history.length
        )
      : 0;

  return (
    <div className="app-container">
      
      {/* 🔵 Navigation Bar */}
      <div className="nav-bar">
        <button
          className={page === "interview" ? "active-nav" : ""}
          onClick={() => setPage("interview")}
        >
          Interview
        </button>

        <button
          className={page === "dashboard" ? "active-nav" : ""}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={page === "profile" ? "active-nav" : ""}
          onClick={() => setPage("profile")}
        >
          Profile
        </button>
      </div>

      {/* ================= INTERVIEW PAGE ================= */}
      {page === "interview" && (
        <SpeechAnalyzer
          history={history}
          setHistory={setHistory}
        />
      )}

      {/* ================= DASHBOARD PAGE ================= */}
      {page === "dashboard" && (
        <div className="dashboard">
          <h1 className="dashboard-title">Performance Dashboard</h1>

          {history.length === 0 ? (
            <p className="empty-text">
              No interviews completed yet.
            </p>
          ) : (
            <>
              <div className="stats-box">
                <h3>Total Interviews: {history.length}</h3>
                <h3>Average Score: {avgScore}/100</h3>
              </div>

              {/* 📈 Graph */}
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={history}>
                    <CartesianGrid stroke="#222" />
                    <XAxis dataKey="date" stroke="#00ffe0" />
                    <YAxis domain={[0, 100]} stroke="#00ffe0" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#00ffe0"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* 📜 History Cards */}
              <div className="history-list">
                {history.map((item, index) => (
                  <div key={index} className="history-card">
                    <p><strong>Question:</strong> {item.question}</p>
                    <p><strong>Score:</strong> {item.score}/100</p>
                    <p><strong>Date:</strong> {item.date}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* ================= PROFILE PAGE ================= */}
      {page === "profile" && (
        <div className="profile">
          <h1>User Profile</h1>

          <div className="profile-card">
            <p><strong>Name:</strong> Gayathri</p>
            <p><strong>Target Role:</strong> Software Developer</p>
            <p><strong>Total Interviews:</strong> {history.length}</p>
            <p><strong>Average Score:</strong> {avgScore}/100</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;