// Jammu & Kashmir Colleges & Cutoffs Data
const jkColleges = {
  engineering: {
    exam: "JKCET (Jammu & Kashmir Common Entrance Test)",
    colleges: [
      { name: "GCET Jammu", cutoff: "80-90 percentile" },
      { name: "SSM College of Engineering", cutoff: "75-85 percentile" },
      { name: "MIET Jammu", cutoff: "70-80 percentile" }
    ]
  },
  medical: {
    exam: "NEET + JKCET (Medical)",
    colleges: [
      { name: "Government Medical College, Srinagar", cutoff: "620+" },
      { name: "Government Medical College, Jammu", cutoff: "610+" },
      { name: "Sher-i-Kashmir Institute of Medical Sciences", cutoff: "615+" }
    ]
  },
  army: {
    exam: "Indian Army Recruitment (J&K Quota)",
    colleges: [
      { name: "Army College of Medical Sciences", cutoff: "Special Quota" },
      { name: "Army Public School Cadet Programs", cutoff: "Merit based" }
    ]
  },
  design: {
    exam: "NIFT Srinagar Entrance",
    colleges: [
      { name: "NIFT Srinagar", cutoff: "Varies each year" }
    ]
  },
  management: {
    exam: "JKBOPEE MBA Entrance",
    colleges: [
      { name: "University of Jammu - MBA Dept.", cutoff: "70+ percentile" },
      { name: "University of Kashmir - Business School", cutoff: "65+ percentile" }
    ]
  },
  civilservices: {
    exam: "JKPSC",
    colleges: [
      { name: "Govt. IAS Coaching Centre, Jammu", cutoff: "Based on exam" },
      { name: "Govt. IAS Coaching Centre, Srinagar", cutoff: "Based on exam" }
    ]
  }
};

// Function to show JK colleges
function showJKColleges(stream) {
  const data = jkColleges[stream];
  if (!data) return;

  let html = `
    <h2>${stream.toUpperCase()} - Jammu & Kashmir</h2>
    <p><strong>Entrance Exam:</strong> ${data.exam}</p>
    <div class="card">
      <h3>Colleges & Cutoffs</h3>
      <ul>
        ${data.colleges.map(c => `<li><strong>${c.name}</strong> - Cutoff: ${c.cutoff}</li>`).join("")}
      </ul>
    </div>
  `;

  const streamsDiv = document.getElementById("streams");
  streamsDiv.innerHTML = html;
}
