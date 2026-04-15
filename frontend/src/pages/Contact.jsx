import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        alert("Inquiry Submitted Successfully!");
        setForm({ name: "", email: "", phone: "", course: "", message: "" }); // Reset form
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
          <input 
            className="border p-3 rounded focus:outline-blue-500"
            placeholder="Name" 
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})} 
            required 
          />
          <input 
            className="border p-3 rounded focus:outline-blue-500"
            type="email"
            placeholder="Email" 
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})} 
            required 
          />
          <input 
            className="border p-3 rounded focus:outline-blue-500"
            placeholder="Phone Number" 
            value={form.phone}
            onChange={e => setForm({...form, phone: e.target.value})} 
          />
          <select 
            className="border p-3 rounded focus:outline-blue-500"
            value={form.course}
            onChange={e => setForm({...form, course: e.target.value})}
          >
            <option value="">Select Course of Interest</option>
            <option value="React">React Mastery</option>
            <option value="Node">Backend with Node</option>
            <option value="Python">Python for Data Science</option>
          </select>
          <textarea 
            className="border p-3 rounded focus:outline-blue-500 h-32"
            placeholder="Your Message" 
            value={form.message}
            onChange={e => setForm({...form, message: e.target.value})}
          />
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-200">
            Submit Inquiry
          </button>
        </form>
      </section>

      
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <div className="text-gray-700 space-y-2">
            <p><strong>📍 Address:</strong> 123 Tech Avenue, Skill City, PIN 560001</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> contact@traininginstitute.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden border">
            {/* Google Maps Embed (Standard Placeholder) */}
            <iframe
              title="institute-map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750422132717!2d77.620025!3d12.92372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzI1LjQiTiA3N8KwMzcnMTIuMSJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}