const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center mb-6">About Our Club</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            The <strong>Rotaract Club of PPG Institute of Technology</strong> was chartered on <strong>16th December 2021</strong> with Club ID <strong>882398</strong>. 
            We are a dynamic, student-led club operating under the sponsorship of the <strong>Rotary Club of Coimbatore East</strong> and part of <strong>Rotary International District 3206</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To provide young leaders with opportunities for professional development, community service, and fellowship — fostering global understanding and meaningful change through action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be a vibrant, service-oriented youth movement that empowers students of PPG Institute of Technology to become socially responsible leaders and changemakers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Parent Rotary Club</h2>
          <p className="text-lg leading-relaxed">
            We are proudly sponsored by the <strong>Rotary Club of Coimbatore East</strong> — a committed and impactful Rotary club that guides and mentors our growth. Their continued support plays a key role in shaping our club's activities and outreach.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Rotary International & District 3206</h2>
          <p className="text-lg leading-relaxed">
            As a part of <strong>Rotary International</strong>, we follow the core Rotaract motto <em>“Service Through Fellowship”</em>.  
            Under <strong>Rotaract District 3206</strong>, we actively collaborate with clubs across the district to participate in multidimensional service and development initiatives.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
