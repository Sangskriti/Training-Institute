export default function Home() {
  return (
    <div>
      <section className="bg-blue-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Training Institute</h1>
        <p>Learn industry-ready skills</p>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p>
          Our mission is to provide quality education with real-world skills.
        </p>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4">React Course</div>
          <div className="border p-4">Node Course</div>
          <div className="border p-4">Python Course</div>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <p>"Great learning experience!"</p>
      </section>
    </div>
  );
}

