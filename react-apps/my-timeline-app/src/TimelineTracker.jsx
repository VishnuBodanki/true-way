import React, { useEffect, useState } from "react";

function TimelineTracker() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/exams")
      .then((res) => res.json())
      .then((data) => setExams(data));
  }, []);

  return (
    <div>
      <h2>Exam Applications Tracker</h2>
      <table border="1" cellPadding="8" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Date</th>
            <th>Stream</th>
            <th>Official Link</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.lastDate}</td>
              <td>{item.stream}</td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimelineTracker;
