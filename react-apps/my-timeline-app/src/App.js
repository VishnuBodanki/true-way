import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import TimelineTracker from "./TimelineTracker";
import ScholarshipTable from "./ScholarshipTable";

function DashboardWelcome() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
      borderRadius: "22px",
      padding: "4rem 2rem",
      boxShadow: "0 10px 36px 0 rgba(31,38,135,.16)",
      minHeight: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      animation: "fadeIn 1.2s",
    }}>
      <h1 style={{
        fontSize: "2.7rem",
        color: "#2467b7",
        margin: 0,
        fontWeight: 800,
        textShadow: "0px 2px 3px #fff8"
      }}>
        🚀 Welcome, Future Achiever!
      </h1>
      <p style={{
        fontSize: "1.35rem",
        color: "#333",
        textAlign: "center",
        margin: "2.5rem 0 0 0",
        maxWidth: "33rem"
      }}>
        This is your personal student dashboard.<br />  
        <b>Select a tab from the left sidebar</b> — track your important applications, explore scholarship opportunities, or send us valuable feedback.
        <br /><br />
        <span style={{ fontSize: "1.05rem", color:"#2467b7", fontWeight: 600 }}>
          Get started by picking a section. Your journey begins here!
        </span>
      </p>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: none;}
        }
      `}</style>
    </div>
  );
}

// Feedback tab opens your n8n form in a new tab
function FeedbackForm() {
  return (
    <div style={{
      background:"#f4fce3", padding:"2.5rem 1.5rem", borderRadius:"18px",
      boxShadow:"0 2px 14px #0001", maxWidth:650, margin:"auto", textAlign:"center"
    }}>
      <h2 style={{color:"#61a517"}}>Share Your Feedback</h2>
      <p>
        We value your input! Please use the link below to send us your suggestions and experiences.
      </p>
      <a
        href="https://chanukya.app.n8n.cloud/form/fe8d3223-40e9-4be1-89c5-d759da3a7ade"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display:"inline-block", marginTop:"20px", fontWeight:"bold", fontSize:"1.2em",
          color:"#fff", background:"#61a517", borderRadius:"6px", padding:"13px 38px",
          textDecoration:"none", boxShadow:"0 1px 8px #0002"
        }}
      >
        Open Feedback Form 🚀
      </a>
    </div>
  );
}

function SidebarButton({to, label, emoji, active}) {
  return (
    <Link to={to} style={{ textDecoration: "none", marginBottom: "12px" }}>
      <div style={{
        padding: "15px 8px",
        borderRadius: "8px",
        background: active ? "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)" : "#e9eafd",
        color: active ? "#fff" : "#392b60",
        fontWeight: 600,
        fontSize: "1.1rem",
        boxShadow: active ? "0 2px 18px 0 #647dee33" : "none",
        letterSpacing: "0.02em",
        cursor: "pointer",
        transition: "all 0.18s",
        display:"flex", alignItems:"center", gap:12
      }}>
        <span style={{fontSize:"1.5em"}}>{emoji}</span>{label}
      </div>
    </Link>
  );
}

function StudentDashboard() {
  const location = useLocation();
  const mainSection = location.pathname.split("/")[2] || "";

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar navigation */}
      <div style={{
        width: "245px",
        background: "linear-gradient(180deg, #f8fafc 60%, #e0c3fc 100%)",
        padding: "40px 16px 12px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        boxShadow: "2px 0 24px #dce2f733",
      }}>
        <span style={{fontWeight:700, color:"#7f53ac", fontSize:"1.35em", marginBottom:28, letterSpacing:"0.02em"}}>
          Student Dashboard
        </span>
        <SidebarButton to="/dashboard/timeline" label="Timeline Tracker" emoji="📆" active={mainSection==="timeline"} />
        <SidebarButton to="/dashboard/scholarships" label="Scholarship Tracker" emoji="🎓" active={mainSection==="scholarships"} />
        <SidebarButton to="/dashboard/feedback" label="Feedback Form" emoji="💡" active={mainSection==="feedback"} />
      </div>
      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: "42px clamp(10px,5vw,90px)",
        background: "#f8fafc",
        minHeight: "700px"
      }}>
        <Routes>
          <Route path="" element={<DashboardWelcome />} />
          <Route path="timeline" element={<TimelineTracker />} />
          <Route path="scholarships" element={<ScholarshipTable />} />
          <Route path="feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<StudentDashboard />} />
        <Route path="/" element={
          <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(120deg, #e0c3fc 30%, #8ec5fc 100%)"
          }}>
            <h1 style={{color:"#234", fontSize:"2.8rem", fontWeight:800}}>Welcome to Your Portal</h1>
            <Link to="/dashboard">
              <button style={{
                marginTop:"2rem",
                padding: "14px 44px",
                fontSize:"1.2rem",
                fontWeight:700,
                color: "#fff",
                background: "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)",
                border:"0",borderRadius:"7px",
                cursor:"pointer",
                boxShadow: "0 4px 16px #54468b4c"
              }}>Enter Student Dashboard 🚀</button>
            </Link>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
