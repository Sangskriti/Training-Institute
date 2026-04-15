import { useEffect, useState } from "react";

const API_BASE_URL = "https://api-website-development.onrender.com/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/courses`)
      .then(res => res.json())
      .then(data => setCourses(Array.isArray(data) ? data : []))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {courses.map(course => (
          <div key={course._id} className="border p-4 rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">{course.duration}</span>
              <span className="text-lg font-bold text-blue-600">₹{course.fees}</span>
            </div>
            <button className="bg-blue-600 text-white w-full py-2 mt-4 rounded hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}