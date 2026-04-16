import { useState } from "react";

const API_BASE_URL = "https://api-website-development.onrender.com/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        alert("Inquiry Submitted Successfully!");
        setForm({ name: "", email: "", phone: "", course: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send inquiry.");
    }
  };

  return (
    <div className="container mx-auto p-8 grid md:grid-cols-2 gap-12">
      <section>
        <h1 className="text-3xl font-bold mb-6">Send an Inquiry</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input className="border p-3 rounded" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
          <input className="border p-3 rounded" type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
          <input className="border p-3 rounded" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          <select className="border p-3 rounded" value={form.course} onChange={e => setForm({...form, course: e.target.value})}>
            <option value="">Select Course of Interest</option>
            <option value="React">React Mastery</option>
            <option value="Node">Backend with Node</option>
            <option value="Python">Python for Data Science</option>
          </select>
          <textarea className="border p-3 rounded h-32" placeholder="Your Message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
          <button className="bg-green-600 text-white font-bold py-3 rounded hover:bg-green-700 transition">
            Submit Inquiry
          </button>
        </form>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Contact Details</h2>
        <div className="text-gray-700 space-y-2">
          <p>📍 123 Tech Avenue, Skill City, PIN 560001</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 contact@traininginstitute.com</p>
        </div>

        <div className="w-full h-64 mt-6 rounded-lg overflow-hidden border">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.4321!3d22.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzA0LjEiTiA4OMKwMjYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
      </section>
    </div>
  );
}