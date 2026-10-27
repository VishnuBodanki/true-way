const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://vishnubodanki_db_user:OS3w3AimQBz7Yy7T@cluster0.xzsihn5.mongodb.net/trueway?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB Connected!'))
 .catch(err => console.log(err));

// College Schema and Model
const collegeSchema = new mongoose.Schema({
  sNo: Number,
  institution: String,
  entranceExam: String,
  generalUG: String,
  generalPG: String,
  obcUG: String,
  obcPG: String,
  scUG: String,
  scPG: String,
  stUG: String,
  stPG: String
});
const College = mongoose.model('College', collegeSchema);

// Insert 10 colleges only ONCE
async function insertDefaultColleges() {
  const count = await College.countDocuments();
  if (count === 0) {
    await College.insertMany([
      {sNo: 1, institution: "Sher-i- Kashmir Institute of Medical Sciences SKIMS", entranceExam: "NEET", generalUG: "645-650", generalPG: "520-540", obcUG: "635-640", obcPG: "500-520", scUG: "440-460", scPG: "400-420", stUG: "420-440", stPG: "380-400"},
      {sNo: 2, institution: "Government Medical College GMC, Jammu", entranceExam: "NEET", generalUG: "640-645", generalPG: "510-530", obcUG: "630-635", obcPG: "490-510", scUG: "430-450", scPG: "390-410", stUG: "410-430", stPG: "370-390"},
      {sNo: 3, institution: "All India Institute of Medical Sciences AIIMS, Vijaypur, Jammu", entranceExam: "INI/NEET", generalUG: "650-655", generalPG: "60-65 percentile", obcUG: "640-645", obcPG: "55-60 percentile", scUG: "440-460", scPG: "45-50 percentile", stUG: "420-440", stPG: "40-45 percentile"},
      {sNo: 4, institution: "Government Medical College GMC, Kathua", entranceExam: "NEET", generalUG: "635-640", generalPG: "500-520", obcUG: "625-630", obcPG: "480-500", scUG: "420-440", scPG: "380-400", stUG: "400-420", stPG: "360-380"},
      {sNo: 5, institution: "Government Medical College GMC, Rajouri", entranceExam: "NEET", generalUG: "630-635", generalPG: "490-510", obcUG: "620-625", obcPG: "470-490", scUG: "410-430", scPG: "370-390", stUG: "400-420", stPG: "360-380"},
      {sNo: 6, institution: "Government Medical College GMC, Baramulla", entranceExam: "NEET", generalUG: "625-630", generalPG: "480-500", obcUG: "615-620", obcPG: "460-480", scUG: "400-420", scPG: "360-380", stUG: "390-410", stPG: "350-370"},
      {sNo: 7, institution: "Government Medical College GMC, Anantnag", entranceExam: "NEET", generalUG: "620-625", generalPG: "470-490", obcUG: "610-615", obcPG: "450-470", scUG: "390-410", scPG: "350-370", stUG: "380-400", stPG: "340-360"},
      {sNo: 8, institution: "Government Medical College GMC, Doda", entranceExam: "NEET", generalUG: "615-620", generalPG: "460-480", obcUG: "605-610", obcPG: "440-460", scUG: "380-400", scPG: "340-360", stUG: "370-390", stPG: "330-350"},
      {sNo: 9, institution: "Indira Gandhi Government Dental College, Jammu", entranceExam: "NEET", generalUG: "610-615", generalPG: "450-470", obcUG: "600-605", obcPG: "430-450", scUG: "370-390", scPG: "330-350", stUG: "360-380", stPG: "320-340"},
      {sNo: 10, institution: "Government Dental College, Srinagar", entranceExam: "NEET", generalUG: "605-610", generalPG: "440-460", obcUG: "595-600", obcPG: "420-440", scUG: "360-380", scPG: "320-340", stUG: "350-370", stPG: "310-330"}
    ]);
    console.log("Default colleges inserted!");
  }
}

insertDefaultColleges();

app.post('/api/colleges', async (req, res) => {
  const college = new College(req.body);
  await college.save();
  res.json(college);
});

app.get('/api/colleges', async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
});

app.get('/api/colleges/:name', async (req, res) => {
  const college = await College.findOne({ institution: req.params.name });
  res.json(college);
});

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});
const streamVideos = {
  "Engineering": [
    { title: "AI Ak AI308 UV 16x9", url: "https://www.youtube.com/watch?v=EuClOkjQEwU" },
    { title: "The Map of Engineering", url: "https://www.youtube.com/watch?v=pQgxiQAMTTo" }
  ],
  "Medical": [
    { title: "How to Choose Your Doctor Specialty in 6 Steps", url: "https://www.youtube.com/watch?v=fL5mrIZENxw&t=324s" },
    { title: "How to select branch & institute after MBBS", url: "https://www.youtube.com/watch?v=WBgMGtkraWg" },
    { title: "10 CAREER OPTIONS AFTER MBBS", url: "https://www.youtube.com/watch?v=53eZjKxV1aI" }
  ],
  "Management": [
    { title: "XAT 2026 Official Mock Test", url: "https://www.youtube.com/watch?v=Mv2L7GO-FFM" },
    { title: "Career in Hospitality Management After 12th", url: "https://www.youtube.com/watch?v=3USj3xHwcFo" }
  ],
  "Law": [
    { title: "Law as a CAREER | Myth vs Reality", url: "https://www.youtube.com/watch?v=4yQXF1aW5-8" },
    { title: "How To Make Career in Law?", url: "https://www.youtube.com/watch?v=vaFtMgbJUpE" }
  ],
  "Commerce": [
    { title: "After 12 Commerce Career Opportunities", url: "https://www.youtube.com/watch?v=GxNQyLLNu18" },
    { title: "AEXL - Video 110", url: "https://www.youtube.com/watch?v=nuuRVdmQm4U" }
  ],
  "Design": [
    { title: "All About Design as Career", url: "https://www.youtube.com/watch?v=giTAdhIfRG4" },
    { title: "Interior Designing Course After 12th", url: "https://www.youtube.com/watch?v=yYDa_3MeITU" }
  ],
  "Fashion": [
    { title: "Career Options After Fashion Designing", url: "https://www.youtube.com/watch?v=EsnSd-9EGLg" },
    { title: "Fashion vs. Future: Can We Balance Style and Sustainability", url: "https://www.youtube.com/watch?v=QMdg2RelaOw" }
  ],
  "Navy": [
    { title: "5 Ways To Join Indian Navy in 2025", url: "https://www.youtube.com/watch?v=2yW7FDf2_AY" },
    { title: "MD USS Video Ads 2 - Jan 2025", url: "https://www.youtube.com/watch?v=x0H_ef0QExQ" }
  ],
  "Army": [
    { title: "3 Ways To Join Indian Army After 10+2", url: "https://www.youtube.com/watch?v=IUp5fDqlDVM" },
    { title: "How to Become NSG Commando?", url: "https://www.youtube.com/watch?v=4Xs1ki_ARIQ" }
  ],
  "Civil Services": [
    { title: "How to Start Preparing for UPSC after 12th", url: "https://www.youtube.com/watch?v=2ndDvJEGIjI" },
    { title: "How to become an IAS Officer | Fees, Salary & Exam Details", url: "https://www.youtube.com/watch?v=IlqwHRVPCK8" }
  ],
  "Arts": [
    { title: "Best Courses After 12th for Arts", url: "https://www.youtube.com/watch?v=-_uMdKIgdHQ" },
    { title: "Gemini Book Freepro 1", url: "https://www.youtube.com/watch?v=R796d-htFOY" },
    { title: "Physics Wallah NSAT For JEE NEET", url: "https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" }
  ],
  "Vocational": [
    { title: "What is Vocational Course?", url: "https://www.youtube.com/watch?v=ZKV1rHZEkYA" },
    { title: "B.Vocational Course Benefits", url: "https://www.youtube.com/watch?v=FBwQsVcMF0k" },
    { title: "Physics Wallah NSAT For JEE NEET", url: "https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" }
  ],
  "MPC": [
    { title: "Physics Wallah NSAT For JEE NEET", url: "https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" }
  ],
  "BiPC": [
    { title: "Physics Wallah NSAT For JEE NEET", url: "https://www.youtube.com/watch?si=h8wJKX3AgmqVpBAh&v=De0Jr59IHQY&feature=youtu.be" }
  ]
};

app.get('/api/stream-videos/:stream', (req, res) => {
  const key = req.params.stream;
  const videos = streamVideos[key] || [];
  res.json(videos);
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
