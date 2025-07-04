const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-500 px-4 sm:px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          About Our Club
        </h1>

        {/* Who We Are */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            The <strong>Rotaract Club of PPG Institute of Technology</strong> was chartered on <strong>16th December 2021</strong> with Club ID <strong>882398</strong>. 
            We are a dynamic, student-led club operating under the sponsorship of the <strong>Rotary Club of Coimbatore East</strong> and part of <strong>Rotary International District 3206</strong>.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            To provide young leaders with opportunities for professional development, community service, and fellowship —
            fostering global understanding and meaningful change through action.
          </p>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            To be a vibrant, service-oriented youth movement that empowers students of PPG Institute of Technology
            to become socially responsible leaders and changemakers.
          </p>
        </section>

        {/* Parent Rotary */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Parent Rotary Club</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            We are proudly sponsored by the <strong>Rotary Club of Coimbatore East</strong> — a committed and impactful Rotary club that guides and mentors our growth.
            Their continued support plays a key role in shaping our club's activities and outreach.
          </p>
        </section>

        {/* RI and District */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Rotary International & District 3206</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            As a part of <strong>Rotary International</strong>, we follow the core Rotaract motto <em>“Fellowship Through Service”</em>.  
            Under <strong>Rotaract District 3206</strong>, we actively collaborate with clubs across the district to participate in multidimensional service and development initiatives.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
