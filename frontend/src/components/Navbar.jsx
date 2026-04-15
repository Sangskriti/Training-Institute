// components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      
      <h1 className="font-bold text-2xl tracking-tight">EduTrain</h1>

      
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link>
        <Link to="/trainers" className="hover:text-blue-400 transition-colors">Trainers</Link>
        <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        <Link 
          to="/admin" 
          className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md font-medium transition-all"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}