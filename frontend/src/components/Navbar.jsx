// components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">EduTrain</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/courses" className="hover:text-blue-400">Courses</Link>
        <Link to="/trainers" className="hover:text-blue-400">Trainers</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        <Link to="/admin" className="bg-blue-600 px-3 py-1 rounded">Admin</Link>
      </div>
    </nav>
  );
}