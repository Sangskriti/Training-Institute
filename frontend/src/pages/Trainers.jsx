export default function Trainers() {
  const trainers = [
    {
      name: "John Doe",
      exp: "5+ Years",
      skill: "Full Stack Development (React & Node.js)",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Industry expert in building scalable web applications."
    },
    {
      name: "Jane Smith",
      exp: "7+ Years",
      skill: "Data Science & Python",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Former Lead Architect at a top-tier tech firm."
    },
    {
      name: "Robert Wilson",
      exp: "6+ Years",
      skill: "UI/UX Design & Tailwind CSS",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Specializes in creating high-fidelity, user-centric designs."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Meet Our Expert Trainers</h1>
          <p className="text-gray-600 mt-2 text-lg">Learn from professionals with real-world industry experience.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <img 
                src={t.photo} 
                alt={t.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{t.name}</h2>
                <div className="mt-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-2.5 py-0.5 rounded">
                    {t.skill}
                  </span>
                </div>
                <div className="text-gray-600 space-y-2">
                  <p className="flex items-center">
                    <span className="font-bold mr-2">Experience:</span> {t.exp}
                  </p>
                  <p className="text-sm italic text-gray-500">
                    "{t.bio}"
                  </p>
                </div>
                <button className="mt-6 w-full border-2 border-blue-600 text-blue-600 font-bold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}