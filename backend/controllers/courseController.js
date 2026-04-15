// Sample data (In a real app, this would be a Database)
let courses = [
  { id: 1, title: "Full Stack Web Dev", duration: "6 Months", fees: "45000", description: "MERN Stack mastery." },
  { id: 2, title: "Data Science", duration: "4 Months", fees: "55000", description: "Python and Machine Learning." }
];

exports.getAllCourses = (req, res) => {
  res.json(courses);
};

exports.createCourse = (req, res) => {
  const course = { id: Date.now(), ...req.body };
  courses.push(course);
  res.status(201).json(course);
};

exports.updateCourse = (req, res) => {
  courses = courses.map(c => c.id == req.params.id ? { ...c, ...req.body } : c);
  res.json({ msg: "Course updated successfully" });
};

exports.deleteCourse = (req, res) => {
  courses = courses.filter(c => c.id != req.params.id);
  res.json({ msg: "Course deleted successfully" });
};