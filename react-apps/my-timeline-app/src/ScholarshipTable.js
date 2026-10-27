import React, { useEffect, useState } from "react";

function ScholarshipTable() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/scholarships")
      .then((res) => res.json())
      .then((data) => setScholarships(data));
  }, []);

  return (
    <div>
      <h2>Scholarship Tracker</h2>
      <table border="1" cellPadding="8" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Date</th>
            <th>Eligible Class</th>
            <th>Amount</th>
            <th>Official Link</th>
          </tr>
        </thead>
        <tbody>
          {scholarships.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.lastDate}</td>
              <td>{item.eligibleClass}</td>
              <td>{item.amount}</td>
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

export default ScholarshipTable;
