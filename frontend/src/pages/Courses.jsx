import { useEffect, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {courses.map(course => (
          <div key={course.id} className="border p-4">
            <h2 className="text-xl">{course.title}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Fees: ₹{course.fees}</p>
            <button className="bg-blue-500 text-white px-3 py-1 mt-2">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}