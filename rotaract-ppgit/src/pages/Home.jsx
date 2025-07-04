import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Rotaract Club of PPG Institute of Technology
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-2 italic text-rose-700 dark:text-rose-400">
          "Service Through Fellowship"
        </p>

        <p className="text-sm sm:text-base md:text-lg max-w-3xl mb-6 text-gray-700 dark:text-gray-300">
          Chartered on <strong>16th December 2021</strong> under Rotary International,
          the Rotaract Club of PPG Institute of Technology is proudly parented by the
          <strong> Rotary Club of Coimbatore East</strong>. We are part of
          <strong> Rotaract International District 3206</strong> and operate with
          Club ID <strong>882398</strong>.
        </p>

        <Link to="/about">
          <button className="px-5 py-2.5 text-sm sm:text-base bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-md transition duration-300">
            Learn About Us
          </button>
        </Link>
      </section>

      {/* What We Do Section */}
      <section className="bg-white dark:bg-gray-900 px-4 sm:px-6 py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            What We Do
          </h2>

          <p className="mb-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We’re a campus-based community of students driven by service, leadership, and growth.
            Through offline and online projects, we aim to create positive impact locally and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Community Service",
                desc: "Hands-on projects to uplift and support government schools and local causes.",
              },
              {
                title: "Leadership & Development",
                desc: "Workshops, training, and opportunities to grow as leaders and changemakers.",
              },
              {
                title: "Fellowship & Events",
                desc: "Fun, culture, bonding — because Rotaract is where service meets friendship.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-rose-100/80 dark:bg-rose-900/20 shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
