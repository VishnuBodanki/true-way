// User login and state check
function loginUser() {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;
    const state = document.getElementById("userState").value;

    if (!name || !email || !password || !state) {
        alert("Please fill all fields.");
        return;
    }

    // Save in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userState", state);

    if(state !== "Jammu & Kashmir") {
        alert("Sorry, only Jammu & Kashmir students are allowed for now.");
        return;
    }

    alert("Login successful!");
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-buttons").style.display = "block";
}

// Forgot password stub
function forgotPassword() {
    alert("Forgot password feature coming soon!");
}


function showStreams(level) {
  const streamsDiv = document.getElementById("streams");
  const backBtn = document.querySelector(".back-btn");
  const mainButtons = document.getElementById("main-buttons");
  let content = "";
  

  if (level === "10th") {
    content = `
      <h2>Choose a Stream after 10th</h2>
      <button onclick="showOpportunities('MPC')">MPC</button>
      <button onclick="showOpportunities('BiPC')">BiPC</button>
      <button onclick="showOpportunities('Arts')">Arts</button>
      <button onclick="showOpportunities('Vocational')">Vocational Courses</button>

      <!-- Quiz Section -->
      <div class="quiz-section" style="margin-top:20px;">
        <h3>Not sure what to choose?</h3>
        <button onclick="startQuiz('10th')">Take 10th Quiz</button>
        <button onclick="approachGoal('10th')">I know my goal, guide me</button>
      </div>
    `;
  } else if (level === "12th") {
    content = `
      <h2>Choose a Stream after 12th</h2>
      <button onclick="showOpportunities('Engineering')">Engineering</button>
      <button onclick="showOpportunities('Medical')">Medical</button>
      <button onclick="showOpportunities('Law')">Law</button>
      <button onclick="showOpportunities('Commerce')">Commerce</button>
      <button onclick="showOpportunities('Management')">Management</button>
      <button onclick="showOpportunities('Design')">Design</button>
      <button onclick="showOpportunities('Fashion')">Fashion</button>
      <button onclick="showOpportunities('Navy')">Navy</button>
      <button onclick="showOpportunities('Army')">Army</button>
      <button onclick="showOpportunities('Civil Services')">Civil Services</button>

      <!-- Quiz Section -->
      <div class="quiz-section" style="margin-top:20px;">
        <h3>Not sure what to choose?</h3>
        <button onclick="startQuiz('12th')">Take 12th Quiz</button>
        <button onclick="approachGoal('12th')">I know my goal, guide me</button>
      </div>
    `;
  }

  mainButtons.style.display = "none";
  streamsDiv.innerHTML = content;
  streamsDiv.style.display = "block";
  backBtn.style.display = "inline-block";
  document.querySelector('.back-btn').style.display = "inline-block";
}

function showOpportunities(stream) {
  let opportunities = "";

  /* ---------- (your existing opportunities for MPC, BiPC, Arts, CEC, MEC, HEC, Vocational, Engineering, Medical, etc.) ---------- */
  /* keep all the 12th streams content here, same as you already have */
  if (stream === "MPC") {
    opportunities = `
      <div class="opportunity-box">
        <h3>MPC Opportunities</h3>
        <p><strong>Govt:</strong> Defence, Railways, Civil Services, PSU Jobs,Police</p>
        <p><strong>Private:</strong> Engineering, IT, Data Science</p>
        <p><strong>Abroad:</strong> Research, Aerospace, Robotics</p>
        <p><strong>Entrance Exams:</strong> JEE Main, CUET, BITSAT</p>
        <p><strong>e-books:</strong> NCERT Solutions, RD Sharma, HC Verma</p>
        <a href="https://jeemain.nta.ac.in/" target="_blank">JEE Main</a> |
        <a href="https://exams.nta.ac.in/CUET-UG/" target="_blank">CUET</a> |
        <a href="https://bitsadmission.com/" target="_blank">BITSAT</a> |
        <a href="https://jkpolice.gov.in/" target="_blank">J&K Police</a> |
        <a href="https://upsc.gov.in/" target="_blank">CDS(UPSC)</a> |
        <a href="https://upsc.gov.in/examinations/NDA" target="_blank">NDA(UPSC)</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" target="_blank">Options in mpc</a></li>
          
        </ul>
      </div>
      </div>
      </div>`;
  } else if (stream === "BiPC") {
    opportunities = `
      <div class="opportunity-box">
        <h3>BiPC Opportunities</h3>
        <p><strong>Govt:</strong> Medical Services, Agriculture Research, Pharmacy Jobs</p>
        <p><strong>Private:</strong> Hospitals, Biotech Firms, Pharma Companies</p>
        <p><strong>Abroad:</strong> MBBS, Genetic Research, International Pharma</p>
        <p><strong>Entrance Exams:</strong> NEET, AIIMS, JIPMER</p>
        <p><strong>e-books:</strong> NCERT Solutions, Pradeep's Biology, O.P. Tandon</p>
        <a href="https://neet.nta.nic.in/" target="_blank">NEET</a> |
        <a href="https://aiimsexams.ac.in/" target="_blank">AIIMS</a> |
        <a href="https://jipmer.edu.in/" target="_blank">JIPMER</a> |
        <a href="https://jkbopee.gov.in/" target="_blank">J&K-JKBOPEE</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" target="_blank">Options in bipc</a
        </ul>
      </div>
      </div>
      </div>`;
  } else if (stream === "Arts") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Arts - Sub Streams</h3>
        <button onclick="showOpportunities('CEC')">CEC</button>
        <button onclick="showOpportunities('MEC')">MEC</button>
        <button onclick="showOpportunities('HEC')">HEC</button>
      </div>`;
  } else if (stream === "CEC") {
    opportunities = `
      <div class="opportunity-box">
        <h3>CEC Opportunities</h3>
        <p><strong>Govt:</strong> Civil Services, Banking, Teaching</p>
        <p><strong>Private:</strong> Chartered Accountant, Company Secretary, Finance</p>
        <p><strong>Abroad:</strong> International Business, Global Finance</p>
        <p><strong>Entrance Exams:</strong> CA, CS, CMA</p>
        <p><strong>e-books:</strong> NCERT Solutions, Sandeep Garg, Dinesh Khattar</p>
        <a href="https://www.icai.org/" target="_blank">CA</a> |
        <a href="https://www.icsi.edu/" target="_blank">CS</a> |
        <a href="https://icmai.in/" target="_blank">CMA</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=-_uMdKIgdHQ" target="_blank">Carrer in arts</a></li>
          <li><a href="https://www.youtube.com/watch?v=R796d-htFOY" target="_blank">Arts streams</a></li>
          <li><a href="https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" target="_blank">Physicswallah</a></li>
        </ul>
      </div>
      </div>
      </div>`;
  } else if (stream === "MEC") {
    opportunities = `
      <div class="opportunity-box">
        <h3>MEC Opportunities</h3>
        <p><strong>Govt:</strong> Civil Services, Banking, Economics Research</p>
        <p><strong>Private:</strong> Business Analyst, Economist, Finance Jobs</p>
        <p><strong>Abroad:</strong> International Economics, Business Administration</p>
        <p><strong>Entrance Exams:</strong> RBI Exams, CAT, CUET</p>
        <p><strong>e-books:</strong> NCERT Solutions, Sandeep Garg, Dinesh Khattar</p>
       
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=-_uMdKIgdHQ" target="_blank">Carrer in arts</a></li>
          <li><a href="https://www.youtube.com/watch?v=R796d-htFOY" target="_blank">Arts streams</a></li>
          <li><a href="https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" target="_blank">Physicswallah</a></li>
      </div>
      </div>
      </div>`;
  } else if (stream === "HEC") {
    opportunities = `
      <div class="opportunity-box">
        <h3>HEC Opportunities</h3>
        <p><strong>Govt:</strong> Civil Services, Teaching, Public Sector</p>
        <p><strong>Private:</strong> Hospitality, Event Management, Arts</p>
        <p><strong>Abroad:</strong> Humanities, International Relations</p>
        <p><strong>Entrance Exams:</strong> SSC, UPSC</p>
        <p><strong>e-books:</strong> NCERT Solutions, Lucent's GK, Arihant Publications</p>
        <a href="https://ssc.nic.in/" target="_blank">SSC Exams</a> |
        <a href="https://www.upsc.gov.in/" target="_blank">UPSC</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=-_uMdKIgdHQ" target="_blank">Carrer in arts</a></li>
          <li><a href="https://www.youtube.com/watch?v=R796d-htFOY" target="_blank">Arts streams</a></li>
          <li><a href="https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" target="_blank">Physicswallah</a></li>
        </ul>
      </div>
      </div>
      </div>`;
  } else if (stream === "Vocational") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Vocational Courses</h3>
        <p><strong>Examples:</strong> ITI, Polytechnic, Agriculture, Paramedical, Technician Courses</p>
        <p><strong>Govt:</strong> Railways, DRDO Technician, Govt Hospitals</p>
        <p><strong>Private:</strong> IT Support, Technician, Skilled Jobs</p>
        <p><strong>Abroad:</strong> Technical Diplomas, Industrial Jobs</p>
        <p><strong>Entrance Exams:</strong> Polytechnic Entrance, ITI Admissions</p>
        <p><strong>e-books:</strong> NCERT Solutions, Vocational Course Books</p>
        <a href="https://sbtetap.gov.in/" target="_blank">Polytechnic Entrance</a> |
        <a href="https://www.itiha.in/" target="_blank">ITI Admissions</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=ZKV1rHZEkYA" target="_blank">What is vocational course</a></li>
          <li><a href="https://www.youtube.com/watch?v=FBwQsVcMF0k" target="_blank">B.vocational course benifits</a></li>
          <li><a href="https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be"target="_blank">Physics wallah</a></li>
        </ul>
      </div>
      </div>
      </div>`;
  }

  /* ---------- 12th Streams ---------- */
  else if (stream === "Engineering") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Engineering Opportunities</h3>
        <p><strong>Specializations:</strong> CSE, Mechanical, ECE, EEE, Civil, AI/ML</p>
        <p><strong>Govt:</strong> ISRO, DRDO, PSU Jobs, UPSC Engineering Services</p>
        <p><strong>Private:</strong> MNC Jobs, Startups, Product Development</p>
        <p><strong>Abroad:</strong> MS, Research, Corporate Jobs</p>
        <p><strong>Entrance Exams:</strong> JEE Main, VITEEE, MET</p>
        <p><strong>e-books:</strong> NCERT Solutions, RD Sharma, O.P. Tandon, Nagrath & Gopal</p>
        <a href="https://jeemain.nta.ac.in/" target="_blank">JEE Main</a> |
        <a href="https://viteee.vit.ac.in/" target="_blank">VITEEE</a> |
        <a href="https://manipal.edu/" target="_blank">MET (Manipal)</a> |
        <a href="https://exams.nta.ac.in/CUET-UG/" target="_blank">CUET</a> |
        <a href="https://jkbopee.gov.in/" target="_blank">J&K-JKBOPEE</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=EuClOkjQEwU" target="_blank">Choose branch in engineering</a></li>
          <li><a href="https://www.youtube.com/watch?v=pQgxiQAMTTo" target="_blank">Map for engineering</a></li>
        </ul>
      </div>
      </div>
      </div>`;
      
  } else if (stream === "Medical") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Medical Opportunities</h3>
        <p><strong>Govt:</strong> AIIMS, Govt Hospitals, Defence Medical Services</p>
        <p><strong>Private:</strong> Private Hospitals, Pharma Companies</p>
        <p><strong>Abroad:</strong> MBBS/MS abroad, Research, International Healthcare</p>
        <p><strong>Entrance Exams:</strong> NEET, AIIMS, JIPMER, JKBOPEE</p>
        <p><strong>e-books:</strong> NCERT Solutions, Pradeep's Biology, O.P. Tandon,  Rajesh Kaushal</p>
        <a href="https://neet.nta.nic.in/" target="_blank">NEET</a> |
        <a href="https://aiimsexams.ac.in/" target="_blank">AIIMS</a> |
        <a href="https://jipmer.edu.in/" target="_blank">JIPMER</a> |
        <a href="https://jkbopee.gov.in/" target="_blank">J&K-JKBOPEE</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=fL5mrIZENxw&t=324s" target="_blank">choose doctor specialst</a></li>
          <li><a href="https://www.youtube.com/watch?v=WBgMGtkraWg" target="_blank">How to select branch and institute after mbbs</a></li>
          <li><a href="https://www.youtube.com/watch?v=53eZjKxV1aI" target="_blank">Carrer options after mbbs</a></li>
      </div>
      </div>
      </div>`;
  } else if (stream === "Law") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Law Opportunities</h3>
        <p><strong>Govt:</strong> Judiciary Services, UPSC</p>
        <p><strong>Private:</strong> Corporate Law Firms, Legal Advisor</p>
        <p><strong>Abroad:</strong> LLM, International Law</p>
        <p><strong>Entrance Exams:</strong> CLAT, AILET</p>
        <p><strong>e-books:</strong> A.P. Bhardwaj, singhal, M.P. Jain</p>
        <a href="https://consortiumofnlus.ac.in/" target="_blank">CLAT</a> |
        <a href="https://nludelhi.ac.in/" target="_blank">AILET</a> |
        <a href="https://law.uok.edu.in/" target="_blank">University of Kashmir - Law</a> | 
        <a href="https://www.jammuuniversity.ac.in/department/law" target="_blank">University of Jammu - Law</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=4yQXF1aW5-8" target="_blank">Law as a CAREER | Myth vs Reality</a></li>
          <li><a href="https://www.youtube.com/watch?v=vaFtMgbJUpE" target="_blank">How To Make Career in Law?</a></li>
        </ul>
      </div>
      </div>
      </div>`;
  } else if (stream === "Commerce") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Commerce Opportunities</h3>
        <p><strong>Govt:</strong> Banking, UPSC, SSC</p>
        <p><strong>Private:</strong> CA, CS, MBA, Finance</p>
        <p><strong>Abroad:</strong> International Business, CFA</p>
        <p><strong>Entrance Exams:</strong> CA, CS, CFA</p>
        <p><strong>e-books:</strong> NCERT Solutions, Sandeep Garg, Dinesh Khattar</p>
        <a href="https://www.icai.org/" target="_blank">CA</a> |
        <a href="https://www.icsi.edu/" target="_blank">CS</a> |
        <a href="https://www.cfainstitute.org/en" target="_blank">CFA</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=GxNQyLLNu18" target="_blank">After 12 commerce carrer oppurunities</a></li>
          <li><a href="https://www.youtube.com/watch?v=nuuRVdmQm4U" target="_blank">Future in commerce</a></li>
        </ul>
      </div>
      </div>
      </div>`;
  } else if (stream === "Management") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Management Opportunities</h3>
        <p><strong>Govt:</strong> Public Sector Management</p>
        <p><strong>Private:</strong> MBA, HR, Marketing, Finance</p>
        <p><strong>Abroad:</strong> MBA Abroad</p>
        <p><strong>Entrance Exams:</strong> CAT, XAT, MAT</p>
        <p><strong>e-books:</strong> Arun Sharma, Nishit Sinha, R.S. Aggarwal</p>
        <a href="https://iimcat.ac.in/" target="_blank">CAT</a> |
        <a href="https://xatonline.in/" target="_blank">XAT</a> |
        <a href="https://mat.aima.in/" target="_blank">MAT</a>|
        <a href="https://cuet.nta.nic.in/" target="_blank">CUET</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=Mv2L7GO-FFM" target="_blank">Guidance for management </a></li>
          <li><a href="https://www.youtube.com/watch?v=3USj3xHwcFo" target="_blank">Hotel managament</a></li>

        </ul>
      </div>
      </div>`;
  } else if (stream === "Design") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Design Opportunities</h3>
        <p><strong>Govt:</strong> NID, NIFT</p>
        <p><strong>Private:</strong> UI/UX Design, Product Design, Graphic Design</p>
        <p><strong>Abroad:</strong> Fashion Tech, Animation, Game Design</p>
        <p><strong>Entrance Exams:</strong> NID DAT, NIFT Entrance, UCAS</p>
        <p><strong>e-books:</strong> NCERT Solutions, francis d.k. ching, Design Aptitude Books</p>
        <a href="https://www.nid.edu/in/students/admissions.html" target="_blank">NID DAT</a> |
        <a href="https://www.nift.ac.in/admissions" target="_blank">NIFT Entrance</a> |
        <a href="https://www.ucas.com/" target="_blank">UCAS (UK)</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=giTAdhIfRG4" target="_blank">All About Design as Career</a></li>
          <li><a href="https://www.youtube.com/watch?v=yYDa_3MeITU" target="_blank">Interior Designing Course After 12th</a></li>
        </ul>
      </div>
      </div>`;
  } else if (stream === "Fashion") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Fashion Opportunities</h3>
        <p><strong>Govt:</strong> NIFT, Govt Fashion Institutes</p>
        <p><strong>Private:</strong> Fashion Designer, Stylist, Textile Industry</p>
        <p><strong>Abroad:</strong> Fashion Management, International Fashion Brands</p>
        <p><strong>Entrance Exams:</strong> NIFT, Pearl Academy, Domus Academy</p>
        <p><strong>e-books:</strong> dharmendra mittal, arihant publications, fashion design books</p>
        <a href="https://www.nift.ac.in/admissions" target="_blank">NIFT</a> |
        <a href="https://www.pearlacademy.com/admissions/" target="_blank">Pearl Academy</a> |
        <a href="https://www.domusacademy.com/admissions/" target="_blank">Domus Academy</a> |
        <a href="https://admissions.nid.edu/" target="_blank">NID</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=EsnSd-9EGLg" target="_blank">Options after fashion designing</a></li>
          <li><a href="https://www.youtube.com/watch?v=QMdg2RelaOw" target="_blank">Fashion vs. Future: Can We Balance Style and Sustainability</a></li>
        </ul>
      </div>
      </div>`;
  } else if (stream === "Navy") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Navy Opportunities</h3>
        <p><strong>Govt:</strong> Indian Navy Officer, Technical Branch</p>
        <p><strong>Private:</strong> Marine Engineering Firms, Ship Building</p>
        <p><strong>Abroad:</strong> Merchant Navy, Naval Research</p>
        <p><strong>Entrance Exams:</strong> NDA, Indian Navy Entry</p>
        <p><strong>e-books:</strong> NCERT Solutions, Arihant Publications, Lucent's GK, Path finder</p>
        <a href="https://www.upsc.gov.in/examinations/NDA" target="_blank">NDA</a> |
        <a href="https://joinindiannavy.gov.in/" target="_blank">Indian Navy Entry</a>
         <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=2yW7FDf2_AY" target="_blank">5 Ways To Join Indian Navy in 2025</a></li>
          <li><a href="https://www.youtube.com/watch?v=x0H_ef0QExQ" target="_blank">MD USS Video - Jan 2025</a></li>
        </ul>
      </div>
      </div>`;
  } else if (stream === "Army") {
    opportunities = `
      <div class="opportunity-box">
        <h3>Army Opportunities</h3>
        <p><strong>Govt:</strong> Indian Army Officer, Technical & Combat Branch, SSB</p>
        <p><strong>Private:</strong> Security, Training Institutes</p>
        <p><strong>Abroad:</strong> Defence Collaborations</p>
        <p><strong>Entrance Exams:</strong> Indian Army Entry</p>
        <p><strong>e-books:</strong> NCERT Solutions, Arihant Publications, Lucent's GK, Path finder</p>
        <a href="https://www.upsc.gov.in/examinations/NDA" target="_blank">NDA</a> |
        <a href="https://joinindianarmy.nic.in/" target="_blank">Indian Army Entry</a> |
        <a href="https://www.jkssb.nic.in/" target="_blank">J&K SSB</a>
        

        <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=IUp5fDqlDVM" target="_blank">Ways to jion in army</a></li>
          <li><a href="https://www.youtube.com/watch?v=4Xs1ki_ARIQ" target="_blank">How to Become NSG Commando?</a></li>
        </ul>
      </div>
      </div>`;
  } else if (stream === "Civil Services") {
  opportunities = `
    <div class="opportunity-box">
      <h3>Civil Services Opportunities</h3>
      <p><strong>Govt:</strong> IAS, IPS, IFS, IRS</p>
      <p><strong>Private:</strong> Policy Analyst, Public Administration Consultant</p>
      <p><strong>Abroad:</strong> International Relations, Diplomacy</p>
      <p><strong>Entrance Exams:</strong> UPSC Civil Services Exam</p>
      <p><strong>e-books:</strong> NCERT Solutions, Arihant Publications, Lucent's GK, MHE India</p>
      <a href="https://www.upsc.gov.in/" target="_blank">UPSC Civil Services</a> |
      <a href="https://www.tnpsc.gov.in/" target="_blank">State PSCs</a> |
      <a href="https://jkpsc.nic.in/" target="_blank">J&K PSC</a> |
      <a href="https://jkssb.nic.in/" target="_blank">J&K SSB</a>
      
      <div class="lecture-videos" style="margin-top:18px;">
        <strong>Lecture/Prep Videos:</strong>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=2ndDvJEGIjI" target="_blank">How to start prepare for upsc</a></li>
          <li><a href="https://www.youtube.com/watch?v=IlqwHRVPCK8" target="_blank">How to become an IAS Officer | Fees, Salary & Exam Details</a></li>
        </ul>
      </div>
    </div>`;

}

const streamsDiv = document.getElementById("streams");
streamsDiv.innerHTML = opportunities;
// Show the main stream info first

// Fetch and show lecture videos for this stream (using backend link)
fetch(`http://localhost:5000/api/stream-videos/${stream}`)
  .then(res => res.json())
  .then(videos => {
    if (videos && videos.length) {
      const videoBox = `
        <div style="background:#fff; border-radius:14px; box-shadow:0 2px 12px #2221; padding:16px 22px; margin:18px 0;">
          <h3 style="margin-top:0; margin-bottom:8px;">Lecture/Prep Videos</h3>
          <ul style="margin:0 0 0 25px;">
            ${videos.map(v => `<li><a href="${v.url}" target="_blank">${v.title}</a></li>`).join("")}
          </ul>
        </div>`;
      streamsDiv.innerHTML += videoBox;
    }
  });

}

function goBack() {
  const streamsDiv = document.getElementById("streams");
  const mainButtons = document.getElementById("main-buttons");
  const backBtn = document.querySelector(".back-btn");

  streamsDiv.style.display = "none";
  mainButtons.style.display = "flex";
  backBtn.style.display = "none";
  document.querySelector('.back-btn').style.display = "inline-block";
}
// ========== Goal-guidance module (paste after your existing functions) ==========

// small "database" of career paths (expandable)

const careerPaths = {
  doctor: {
    title: "Doctor / MBBS",
    recommendedStream: "BiPC (12th)",
    short: "Take BiPC at 12th Ã¢â€ â€™ Prepare for NEET Ã¢â€ â€™ Apply to MBBS / MD programs",
    exams: [
      {name: "NEET (NTA)", url: "https://neet.nta.nic.in/"},
      {name: "AIIMS Entrance", url: "https://aiimsexams.ac.in/"},
      {name: "JIPMER", url: "https://jipmer.edu.in/"},
      { name: "JKCET (J&K Engineering Entrance)", url: "https://jkbopee.gov.in/" }
    ]
  },
  engineer: {
    title: "Engineer (CSE / ECE / EEE / Civil etc.)",
    recommendedStream: "MPC (PCM) / PCM at 12th",
    short: "Take PCM Ã¢â€ â€™ Prepare for JEE Main/Advanced Ã¢â€ â€™ Choose branch (CSE, ECE, EEE, Mech...)",
    exams: [
      {name: "JEE Main (NTA)", url: "https://jeemain.nta.ac.in/"},
      {name: "JEE Advanced", url: "https://jeeadv.ac.in/"},
      {name: "BITSAT", url: "https://bitsadmission.com/"},
      { name: "JKCET (J&K Engineering Entrance)", url: "https://jkbopee.gov.in/" }
    ]
  },
  law: {
  title: "Law / Legal Studies",
  recommendedStream: "Any stream (Humanities or Arts helpful)",
  short: "Some description Ã¢â‚¬Â¦",
  exams: [
    { name: "CLAT", url: "https://consortiumofnlus.ac.in/" },
    { name: "CUET Law", url: "https://cuet.nta.nic.in/" }
  ],
  colleges: [
    { name: "University of Kashmir - Law", url: "https://law.uok.edu.in/" },
    { name: "University of Jammu - Law", url: "https://www.jammuuniversity.ac.in/department/law" }
  ]
},

  navy: {
    title: "Indian Navy / Naval Officer",
    recommendedStream: "MPC / PCM is recommended for technical branches",
    short: "Prepare for NDA / Indian Navy entries or BTech (Naval) entries",
    exams: [
      {name: "NDA (UPSC)", url: "https://nda.nic.in/"},
      {name: "Indian Navy Entry", url: "https://joinindiannavy.gov.in/"}
    ]
  },
  army: {
    title: "Indian Army",
    recommendedStream: "Any stream (NDA for 12th entrants), technical branches prefer PCM",
    short: "Prepare for NDA / CDS / Service-specific entries",
    exams: [
      {name: "NDA (UPSC)", url: "https://nda.nic.in/"},
      {name: "Army Recruitment", url: "https://joinindianarmy.nic.in/"},
       { name: "NDA", url: "https://www.upsc.gov.in/" },
      { name: "CDS", url: "https://www.upsc.gov.in/" },
       { name: "J&K Police Recruitment", url: "https://www.jkpolice.gov.in/" }
    ]
  },
  fashion: {
    title: "Fashion Designer",
    recommendedStream: "12th (Design/Arts) Ã¢â€ â€™ NIFT / Pearl Academy / Private colleges",
    short: "Prepare portfolio and NIFT / NID / private institute entrance tests",
    exams: [
      {name: "NIFT", url: "https://www.nift.ac.in/"},
      {name: "Pearl Academy", url: "https://www.pearlacademy.com/"}
    ]
  },
  design: {
    title: "Design (Product / UI / Industrial)",
    recommendedStream: "12th (Arts/Science) Ã¢â€ â€™ NID / UCEED / CEED",
    short: "Work on portfolio, prepare for design aptitude tests",
    exams: [
      {name: "NID DAT", url: "https://www.nid.edu/"},
      {name: "UCEED", url: "https://www.uceed.iitb.ac.in/"}
    ]
  },
  psychology: {
    title: "Psychologist / Counselor",
    recommendedStream: "12th (Arts/Science) Ã¢â€ â€™ BA / BSc Psychology Ã¢â€ â€™ MA / MPhil / PhD",
    short: "Study Psychology Ã¢â€ â€™ specializations in counseling / clinical psychology",
    exams: [
      {name: "UG Admissions (CUET)", url: "https://cuet.samarth.ac.in/"},
      {name: "PG Psychology programs", url: "https://www.nta.ac.in/"}
    ]
  },
  commerce: {
    title: "Commerce (CA / CS / CFA / Finance)",
    recommendedStream: "12th Commerce (B.Com / BBA) Ã¢â€ â€™ CA / CS / CMA / MBA",
    short: "Choose CA/CS path or BCom Ã¢â€ â€™ CFA for international finance",
    exams: [
      {name: "CA (ICAI)", url: "https://www.icai.org/"},
      {name: "CS (ICSI)", url: "https://www.icsi.edu/"},
      {name: "CFA (global)", url: "https://www.cfainstitute.org/"}
    ]
  },
  teacher: {
    title: "Teacher / Academics",
    recommendedStream: "12th (any) Ã¢â€ â€™ BEd / BSc/BA Ã¢â€ â€™ Teaching / TET/NET",
    short: "Complete graduation Ã¢â€ â€™ BEd / teaching certificates Ã¢â€ â€™ apply to schools/colleges",
    exams: [
      {name: "TET (State)", url: "https://ntse.nsdl.co.in/"},
      {name: "UG/PG Admissions (CUET)", url: "https://cuet.samarth.ac.in/"}
    ]
  },
  software: {
    title: "Software Developer / Programmer",
    recommendedStream: "MPC (Computer Science) or Engineering (CSE) later",
    short: "Learn coding, build projects, take CS/engineering path",
    exams: [
      {name: "JEE Main", url: "https://jeemain.nta.ac.in/"},
      {name: "CUET", url: "https://cuet.samarth.ac.in/"},
      { name: "J&K MBA Admissions (BOPEE)", url: "https://jkbopee.gov.in/" }
    ]
  }
};

// helpful synonyms mapping: maps common typed words to careerKeys above
const synonyms = {
  mbbs: "doctor",
  physician: "doctor",
  doctor: "doctor",
  medical: "doctor",
  engineer: "engineer",
  engineering: "engineer",
  lawyer: "lawyer",
  advocate: "lawyer",
  navy: "navy",
  naval: "navy",
  army: "army",
  soldier: "army",
  fashion: "fashion",
  designer: "fashion",
  design: "design",
  psychology: "psychology",
  psychologist: "psychology",
  commerce: "commerce",
  accountant: "commerce",
  ca: "commerce",
  teacher: "teacher",
  tutor: "teacher",
  software: "software",
  programmer: "software",
  developer: "software"
};

// show the "I know my goal" UI
function approachGoal(level) {
  const streamsDiv = document.getElementById("streams");
  streamsDiv.innerHTML = `
    <div class="goal-box">
      <h2>Tell us your goal</h2>
      <p>Type what you want to become (e.g. Doctor, Engineer, Lawyer, Navy officer)</p>
      <input id="goalInput" placeholder="Type goal (example: Doctor, Engineer, Lawyer)" oninput="showSuggestions(this.value)" />
      <div id="goalSuggestions" class="suggestions" style="display:none;"></div>

      <div class="goal-actions">
        <button onclick="searchGoal('${level}')">Search</button>
        <button onclick="goBack()">Cancel</button>
      </div>

      <div id="goalResult"></div>
    </div>
  `;
  // focus the input automatically
  setTimeout(()=>{ const el = document.getElementById("goalInput"); if(el) el.focus(); }, 100);
}

// show suggestions below input as user types
function showSuggestions(text) {
  const box = document.getElementById("goalSuggestions");
  if (!box) return;
  const q = (text || "").toLowerCase().trim();
  if (!q) { box.style.display = "none"; box.innerHTML = ""; return; }

  const keys = Object.keys(careerPaths);
  // find human-friendly matches using title and synonyms
  const matches = keys.filter(k => {
    const title = (careerPaths[k].title || "").toLowerCase();
    return title.includes(q) || k.includes(q) || (Object.keys(synonyms).includes(q) && synonyms[q] === k);
  });

  // also look for substrings (looser)
  if (matches.length === 0) {
    for (let k of keys) {
      if (k.includes(q) || careerPaths[k].title.toLowerCase().includes(q)) matches.push(k);
    }
  }

  if (matches.length === 0) {
    // show a few top suggestions (friendly names)
    const suggestions = keys.slice(0,6).map(k => `<div class="suggestion-item" onclick="fillGoal('${k}')">${careerPaths[k].title}</div>`).join("");
    box.innerHTML = suggestions;
    box.style.display = "block";
    return;
  }

  box.innerHTML = matches.map(k => `<div class="suggestion-item" onclick="fillGoal('${k}')">${careerPaths[k].title}</div>`).join("");
  box.style.display = "block";
}

// place a suggestion into the input when clicked
function fillGoal(key) {
  const el = document.getElementById("goalInput");
  if (!el) return;
  el.value = careerPaths[key].title;
  // hide suggestions
  const box = document.getElementById("goalSuggestions");
  if (box) { box.style.display = "none"; box.innerHTML = ""; }
}

// handle search when user clicks Search button
function searchGoal(level) {
  const raw = (document.getElementById("goalInput")?.value || "").toLowerCase().trim();
  const resultDiv = document.getElementById("goalResult");
  if (!raw) {
    alert("Please type your goal (e.g. Doctor, Engineer).");
    return;
  }

  // normalize and map to careerPaths key
  let key = null;
  // direct match against title words
  for (let k of Object.keys(careerPaths)) {
    if (careerPaths[k].title.toLowerCase() === raw) { key = k; break; }
  }
  // synonyms exact
  if (!key && synonyms[raw]) key = synonyms[raw];
  // substring synonyms
  if (!key) {
    for (let s of Object.keys(synonyms)) {
      if (raw.includes(s)) { key = synonyms[s]; break; }
    }
  }
  // substring match in career title
  if (!key) {
    for (let k of Object.keys(careerPaths)) {
      if (careerPaths[k].title.toLowerCase().includes(raw) || k.includes(raw)) { key = k; break; }
    }
  }

  if (!key) {
    // not found Ã¢â‚¬â€ show helpful message and suggestions
    const suggestionsHtml = Object.keys(careerPaths)
      .map(k => `<div style="margin:6px 0;"><button style="padding:8px 12px;border-radius:12px;border:none;cursor:pointer" onclick="fillGoal('${k}');document.getElementById('goalResult').innerHTML='';document.getElementById('goalInput').focus();">${careerPaths[k].title}</button></div>`)
      .join("");
    resultDiv.innerHTML = `
      <div style="padding:12px;background:#fff;border-radius:8px;color:#222">
        <p><strong>No direct match found for:</strong> "${raw}"</p>
        <p>Try one of these popular goals:</p>
        ${suggestionsHtml}
      </div>
    `;
    return;
  }

  // build result HTML
  const info = careerPaths[key];
  const examsHtml = (info.exams || []).map(e => `<a href="${e.url}" target="_blank" rel="noopener">${e.name}</a>`).join(" | ");
  resultDiv.innerHTML = `
    <div style="padding:12px;background:#fff;border-radius:10px;color:#222;">
      <h3 style="margin:0 0 8px 0;">Path to become: ${info.title}</h3>
      <p style="margin:6px 0;"><strong>Recommended Stream (12th):</strong> ${info.recommendedStream}</p>
      <p style="margin:6px 0;"><strong>Quick steps:</strong> ${info.short}</p>
      <p style="margin:8px 0;"><strong>Important exams / links:</strong><br>${examsHtml}</p>
      <p style="margin-top:10px;"><strong>Tip:</strong> After 12th, prepare for the entrance exams listed and check state/central counselling portals for admissions.</p>
      <div style="margin-top:10px;"><button onclick="goBack()">OK, Back</button></div>
    </div>
  `;
}


// ================== QUIZ SYSTEM ==================
// ================== QUIZ SYSTEM ==================
function startQuiz(level) {
  const streamsDiv = document.getElementById("streams");

  if (level === "10th") {
    // --- 10th Quiz (same as before) ---
    let quizHtml = `
      <div class="quiz-box">
        <h2>10th Career Quiz</h2>
        <p><strong>Q1:</strong> Which subject do you enjoy the most?</p>
        <input type="radio" name="q1" value="math"> Mathematics<br>
        <input type="radio" name="q1" value="science"> Science<br>
        <input type="radio" name="q1" value="arts"> Arts / Social Studies<br><br>

        <p><strong>Q2:</strong> What type of career excites you?</p>
        <input type="radio" name="q2" value="tech"> Technology / Engineering<br>
        <input type="radio" name="q2" value="medical"> Medical / Health<br>
        <input type="radio" name="q2" value="creative"> Creative / Design<br><br>

        <p><strong>Q3:</strong> Do you prefer:</p>
        <input type="radio" name="q3" value="govt"> Government Services<br>
        <input type="radio" name="q3" value="private"> Private Sector / Business<br>
        <input type="radio" name="q3" value="abroad"> Study / Work Abroad<br><br>

        <button onclick="submitQuiz('10th')">Submit Quiz</button>
      </div>
    `;
    streamsDiv.innerHTML = quizHtml;
  }

  else if (level === "12th") {
    // --- 12th Quiz (10 questions) ---
    let quizHtml = `
      <div class="quiz-box">
        <h2>12th Career Quiz</h2>

        <p><strong>Q1 (Computer):</strong> Do you enjoy coding and problem solving?</p>
        <input type="radio" name="q1" value="yes"> Yes<br>
        <input type="radio" name="q1" value="no"> No<br><br>

        <p><strong>Q2 (Computer):</strong> Which excites you more?</p>
        <input type="radio" name="q2" value="software"> Software Development<br>
        <input type="radio" name="q2" value="hardware"> Computer Hardware<br><br>

        <p><strong>Q3 (Computer):</strong> Do you like learning programming languages?</p>
        <input type="radio" name="q3" value="yes"> Yes<br>
        <input type="radio" name="q3" value="no"> No<br><br>

        <p><strong>Q4 (ECE):</strong> Are you curious about how mobile phones and satellites communicate?</p>
        <input type="radio" name="q4" value="yes"> Yes<br>
        <input type="radio" name="q4" value="no"> No<br><br>

        <p><strong>Q5 (ECE):</strong> Would you enjoy designing circuits or working with electronics?</p>
        <input type="radio" name="q5" value="yes"> Yes<br>
        <input type="radio" name="q5" value="no"> No<br><br>

        <p><strong>Q6 (EEE):</strong> Do you find power systems, motors, and electricity interesting?</p>
        <input type="radio" name="q6" value="yes"> Yes<br>
        <input type="radio" name="q6" value="no"> No<br><br>

        <p><strong>Q7 (EEE):</strong> Would you like to work in renewable energy (solar, wind)?</p>
        <input type="radio" name="q7" value="yes"> Yes<br>
        <input type="radio" name="q7" value="no"> No<br><br>

        <p><strong>Q8 (Psychology):</strong> Do you like understanding human behavior and emotions?</p>
        <input type="radio" name="q8" value="yes"> Yes<br>
        <input type="radio" name="q8" value="no"> No<br><br>

        <p><strong>Q9 (Psychology):</strong> Would you enjoy helping people through counseling or therapy?</p>
        <input type="radio" name="q9" value="yes"> Yes<br>
        <input type="radio" name="q9" value="no"> No<br><br>

        <p><strong>Q10 (General):</strong> Do you see yourself in research/innovation or management/business?</p>
        <input type="radio" name="q10" value="research"> Research & Innovation<br>
        <input type="radio" name="q10" value="management"> Management / Business<br><br>

        <button onclick="submitQuiz('12th')">Submit Quiz</button>
      </div>
    `;
    streamsDiv.innerHTML = quizHtml;
  }
}

function submitQuiz(level) {
  const streamsDiv = document.getElementById("streams");
  let suggestion = "";

  if (level === "10th") {
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;

    if (!q1 || !q2 || !q3) {
      alert("Please answer all questions!");
      return;
    }

    if (q1 === "math" && q2 === "tech") {
      suggestion = "You are strong in Maths & Tech Ã¢â€ â€™ Try **MPC / Engineering / Data Science**.";
    } else if (q1 === "science" && q2 === "medical") {
      suggestion = "You are science-oriented Ã¢â€ â€™ Try **BiPC / Medicine / Pharmacy**.";
    } else if (q1 === "arts" && q2 === "creative") {
      suggestion = "You are creative & artistic Ã¢â€ â€™ Try **Arts / Design / Fashion**.";
    } else if (q3 === "govt") {
      suggestion = "You seem motivated for Govt Jobs Ã¢â€ â€™ Try **Civil Services, Defence, PSU Careers**.";
    } else if (q3 === "abroad") {
      suggestion = "You dream of going abroad Ã¢â€ â€™ Explore **International Studies, Research, MS/PhD**.";
    } else {
      suggestion = "You have a mix of skills Ã¢â€ â€™ Explore **Management, Commerce, or Interdisciplinary fields**.";
    }
  }

  else if (level === "12th") {
    // collect all 10 answers
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    const q5 = document.querySelector('input[name="q5"]:checked')?.value;
    const q6 = document.querySelector('input[name="q6"]:checked')?.value;
    const q7 = document.querySelector('input[name="q7"]:checked')?.value;
    const q8 = document.querySelector('input[name="q8"]:checked')?.value;
    const q9 = document.querySelector('input[name="q9"]:checked')?.value;
    const q10 = document.querySelector('input[name="q10"]:checked')?.value;

    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
      alert("Please answer all questions!");
      return;
    }

    // suggestion logic
    if (q1 === "yes" && q2 === "software" && q3 === "yes") {
      suggestion = "You love coding Ã¢â€ â€™ Best fit for **Computer Science / IT / AI**.";
    } else if (q4 === "yes" && q5 === "yes") {
      suggestion = "You like circuits & communication Ã¢â€ â€™ Try **ECE (Electronics & Communication)**.";
    } else if (q6 === "yes" && q7 === "yes") {
      suggestion = "You are interested in electricity & power Ã¢â€ â€™ Try **EEE (Electrical Engineering)**.";
    } else if (q8 === "yes" && q9 === "yes") {
      suggestion = "You care about human behavior Ã¢â€ â€™ Try **Psychology / Counseling**.";
    } else if (q10 === "research") {
      suggestion = "You think like a researcher Ã¢â€ â€™ Try **Engineering/Science Research**.";
    } else if (q10 === "management") {
      suggestion = "You lean towards leadership Ã¢â€ â€™ Try **Management, Commerce, MBA**.";
    } else {
      suggestion = "You have a wide range of interests Ã¢â€ â€™ Explore **Interdisciplinary Careers**.";
    }
  }
  
// Show the suggestion
// Always define the variable before using it!
let youtubeLinksHTML = ""; // Start as empty string

// TODO: If you set youtubeLinksHTML from backend, assign it here.
// Example: youtubeLinksHTML = backendResponse.youtubeLinksHTML || "";
// If not yet implemented, just leave as empty string and it will work safely.

// Show the suggestion/result and video with logo


// Now separately add your quiz/retake button (outside the flexbox HTML!!)
streamsDiv.innerHTML += `
  <button onclick="startQuiz('${level}')">Retake Quiz</button>
`;


// say this is inside your function that gets the HTML for links from backend
let lectureLinksHTML = ""; // TODO: assign actual lecture links HTML from backend response if available
let headingHTML = `<h3 style="color:black;">Lecture/Prep Videos</h3>`;
streamsDiv.innerHTML += headingHTML + lectureLinksHTML;


// Fetch all colleges from backend
fetch('http://localhost:5000/api/colleges')
.then(res => res.json())
.then(colleges => {
let matchKeywords = [];

// -- Define keywords for your suggestion
if (
    suggestion.includes("Computer Science") || suggestion.includes("IT") || suggestion.includes("AI") ||
    suggestion.includes("ECE") || suggestion.includes("EEE") || suggestion.includes("Civil") ||
    suggestion.includes("Mechanical") || suggestion.includes("Engineering") ||
    suggestion.includes("coding") || suggestion.includes("Data Science")
) {
    matchKeywords = ["JEE", "Engineering", "B.Tech"];
}
else if (
    suggestion.includes("Medicine") || suggestion.includes("Medical") ||
    suggestion.includes("BiPC") || suggestion.includes("Pharmacy")
) {
    matchKeywords = ["NEET", "Medical", "Pharmacy", "MBBS"];
}
else if (
    suggestion.includes("Psychology") || suggestion.includes("Counseling") ||
    suggestion.includes("human behavior") || suggestion.includes("helping people")
) {
    matchKeywords = ["psychology", "counsel"];
}
else if (
    suggestion.includes("Management") || suggestion.includes("Commerce") ||
    suggestion.includes("MBA")
) {
    matchKeywords = ["Management", "Commerce", "MBA"];
}
else if (suggestion.includes("Law")) {
    matchKeywords = ["Law", "CLAT"];
}
else if (
    suggestion.includes("UG") || suggestion.includes("General") ||
    suggestion.includes("CUET") || suggestion.includes("Interdisciplinary") ||
    suggestion.includes("Science Research")
) {
    matchKeywords = ["CUET"];
}

// Filter the colleges using the keywords
let filteredColleges = [];
if (matchKeywords.length > 0) {
    filteredColleges = colleges.filter(clg =>
        matchKeywords.some(kw =>
            (clg.entranceExam && clg.entranceExam.toUpperCase().includes(kw.toUpperCase())) ||
            (clg.institution && clg.institution.toUpperCase().includes(kw.toUpperCase()))
        )
    );
}

// Build and display the results!
streamsDiv.innerHTML = `
    <div class="quiz-result" style="padding:20px;border-radius:16px;background:#fff;box-shadow:0 2px 8px #2222;max-width:600px;margin:auto;margin-top:30px;color:#111;">
        <h2>AI Suggestion</h2>
        <p>${suggestion}</p>
        <div id="collegeResults">
            <h3 style='margin-top:18px;font-size:20px;color:#222;'>Recommended Colleges:</h3>
            ${
                filteredColleges.length === 0
                ? "<b style='color:#900;'>No colleges found matching your suggestion.</b>"
                : filteredColleges.map(clg => `
                    <div style="background:#fff;border-radius:12px;box-shadow:0 1px 6px #2221;padding:12px 18px;margin:14px 0; color:#111;">
                        <strong>${clg.institution}</strong> <br>
                        <span style="color:#256">${clg.entranceExam}</span><br>
                        <span style="font-size:14px;">General UG: ${clg.generalUG} | OBC UG: ${clg.obcUG} | SC UG: ${clg.scUG} | ST UG: ${clg.stUG}</span>
                    </div>
                `).join('')
            }
        </div>
        <button onclick="startQuiz('${level}')">Retake Quiz</button>
        <button onclick="goBack()">🗙 Back</button>
    </div>
    `;
})
.catch(err => {
    streamsDiv.innerHTML = "<span style='color:red'>Could not load colleges. Is the backend running?</span>";
});


}
