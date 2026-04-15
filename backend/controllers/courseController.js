
const Course = require("../models/Course");


exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};


exports.createCourse = async (req, res) => {
  try {
    
    const newCourse = new Course(req.body);
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(400).json({ error: "Failed to create course" });
  }
};


exports.updateCourse = async (req, res) => {
  try {
    
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } 
    );
    res.json({ msg: "Course updated successfully", updatedCourse });
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
};


exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ msg: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};