import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Rotaract Club of PPG Institute of Technology
        </h1>
        <p className="text-lg md:text-xl mb-2 italic text-rose-600 dark:text-rose-400">
          "Service Through Fellowship"
        </p>
        <p className="text-base md:text-lg max-w-2xl mb-6">
          Chartered on <strong>16th December 2021</strong> under Rotary International, the Rotaract Club of PPG Institute of Technology is proudly parented by the <strong>Rotary Club of Coimbatore East</strong>. We are part of <strong>Rotaract International District 3206</strong> and operate with Club ID <strong>882398</strong>.
        </p>
        <Link to="/about">
  <button className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">
    Learn About Us
  </button>
</Link>
      </section>

      <section className="bg-white dark:bg-gray-900 px-6 py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            We’re a campus-based community of students driven by service, leadership, and growth. Through offline and online projects, we aim to create positive impact locally and beyond.
          </p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-10">
            <div className="p-6 rounded-xl bg-rose-100 dark:bg-rose-900/20 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Community Service</h3>
              <p className="text-sm">Hands-on projects to uplift and support government schools and local causes.</p>
            </div>
            <div className="p-6 rounded-xl bg-rose-100 dark:bg-rose-900/20 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Leadership & Development</h3>
              <p className="text-sm">Workshops, training, and opportunities to grow as leaders and changemakers.</p>
            </div>
            <div className="p-6 rounded-xl bg-rose-100 dark:bg-rose-900/20 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Fellowship & Events</h3>
              <p className="text-sm">Fun, culture, bonding — because Rotaract is where service meets friendship.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
