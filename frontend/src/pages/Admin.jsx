import { useEffect, useState, useCallback } from "react";
const API_BASE_URL = "https://api-website-development.onrender.com/api";

export default function Admin() {
  const [courses, setCourses] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [form, setForm] = useState({ title: "", fees: "", duration: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const resCourses = await fetch(`${API_BASE_URL}/courses`);
      const dataCourses = await resCourses.json();
      
      const resInquiries = await fetch(`${API_BASE_URL}/inquiry`);
      const dataInquiries = await resInquiries.json();

      setCourses(dataCourses);
      setInquiries(dataInquiries);
    } catch (err) {
      console.error("Data loading failed:", err);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadInitialData = async () => {
      try {
        const resCourses = await fetch(`${API_BASE_URL}/courses`);
        const dataCourses = await resCourses.json();
        const resInquiries = await fetch(`${API_BASE_URL}/inquiry`);
        const dataInquiries = await resInquiries.json();

        if (isMounted) {
          setCourses(dataCourses);
          setInquiries(dataInquiries);
        }
      } catch (err) {
        if (isMounted) console.error("Initial load failed:", err);
      }
    };

    loadInitialData();

    return () => {
      isMounted = false;
    };
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId ? `${API_BASE_URL}/courses/${editingId}` : `${API_BASE_URL}/courses`;
    const method = editingId ? "PUT" : "POST";
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setForm({ title: "", fees: "", duration: "", description: "" });
        setEditingId(null);
        fetchData(); 
        alert(editingId ? "Course Updated" : "Course Added");
      }
    } catch (err) {
      console.error("Submit failed:", err);
    }
  };

  const deleteCourse = async (id) => {
    if (window.confirm("Delete this course?")) {
      try {
        await fetch(`${API_BASE_URL}/courses/${id}`, { method: "DELETE" });
        fetchData();
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const startEdit = (course) => {
    setEditingId(course._id); 
    setForm({
      title: course.title,
      fees: course.fees,
      duration: course.duration,
      description: course.description
    });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12">
      <header>
        <h1 className="text-4xl font-extrabold text-gray-800">Admin Dashboard</h1>
      </header>
      
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4">{editingId ? "Edit Course" : "Add New Course"}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-500" placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
          <input className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-500" placeholder="Fees" value={form.fees} onChange={e => setForm({...form, fees: e.target.value})} required />
          <input className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-500" placeholder="Duration" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} required />
          <textarea className="border p-2 rounded md:col-span-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} required />
          <div className="md:col-span-2 flex gap-3">
             <button type="submit" className={`flex-1 text-white p-2 rounded font-bold transition-all ${editingId ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                {editingId ? "Update Course" : "Create Course"}
             </button>
             {editingId && (
               <button type="button" onClick={() => {setEditingId(null); setForm({title:"", fees:"", duration:"", description:""})}} className="bg-gray-400 hover:bg-gray-500 text-white px-6 rounded transition font-bold">
                 Cancel
               </button>
             )}
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Course Inventory</h2>
        <div className="overflow-hidden border rounded-xl shadow-sm bg-white">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b text-gray-600 uppercase text-xs font-semibold">
                <tr>
                  <th className="p-4">Course Name</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Fees</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {courses.map(course => (
                  // FIX 2: key change kore _id koro
                  <tr key={course._id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-800">{course.title}</td>
                    <td className="p-4 text-gray-600">{course.duration}</td>
                    <td className="p-4 text-blue-600 font-bold">₹{course.fees}</td>
                    <td className="p-4 text-right space-x-4">
                      {/* FIX 3: functions call korar somoy _id pathao */}
                      <button onClick={() => startEdit(course)} className="text-blue-500 hover:text-blue-700 underline">Edit</button>
                      <button onClick={() => deleteCourse(course._id)} className="text-red-500 hover:text-red-700 underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Inquiries</h2>
        <div className="space-y-4">
          {inquiries.length > 0 ? inquiries.map((iq, i) => (
            <div key={iq._id || i} className="bg-white border-l-4 border-blue-500 p-5 rounded shadow-sm flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h3 className="font-bold">{iq.name} <span className="text-blue-500 text-sm ml-2">{iq.email}</span></h3>
                <p className="text-gray-600 text-sm font-medium">Interested: {iq.course}</p>
                <p className="text-gray-500 mt-2 italic text-sm">"{iq.message}"</p>
              </div>
              <div className="text-gray-700 text-sm">Contact: {iq.phone || 'N/A'}</div>
            </div>
          )) : <div className="text-center text-gray-400 py-10">No inquiries yet.</div>}
        </div>
      </section>
    </div>
  );
}