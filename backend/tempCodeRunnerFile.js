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

// College Schema (optional for future)
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

// Timeline Schema & Model
const timelineSchema = new mongoose.Schema({
  name: String,
  lastDate: String,
  stream: String,
  link: String
});
const Timeline = mongoose.model('Timeline', timelineSchema, 'timeline');

// Scholarship Schema & Model
const scholarshipSchema = new mongoose.Schema({
  name: String,
  lastDate: String,
  eligibleClass: String,
  amount: String,
  link: String
});
const Scholarship = mongoose.model('Scholarship', scholarshipSchema, 'scholarships');

// Routes

app.get('/api/colleges', async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
});

app.get('/api/exams', async (req, res) => {
  const exams = await Timeline.find();
  res.json(exams);
});

app.get('/api/scholarships', async (req, res) => {
  const scholarships = await Scholarship.find();
  res.json(scholarships);
});

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
