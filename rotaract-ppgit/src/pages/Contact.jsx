import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white px-4 sm:px-6 py-10 transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Rotaract Club of PPG Institute of Technology</h2>
            <p>
              Chartered on: <strong>16/12/2021</strong><br />
              Club ID: <strong>882398</strong><br />
              RI District: <strong>3206</strong><br />
              Parent Rotary Club: <strong>Rotary Club of Coimbatore East</strong>
            </p>

            <div>
              <p className="mb-1 font-medium">📍 Address:</p>
              <p>PPG Institute of Technology, Vilankurichi Road, Coimbatore – 641035</p>
            </div>

            <div>
              <p className="mb-1 font-medium">📧 Email:</p>
              <p>
                <a
                  href="mailto:rotaract.ppgit@gmail.com"
                  className="hover:underline text-sky-600 dark:text-sky-400"
                >
                  rotaract.ppgit@gmail.com
                </a>
              </p>
            </div>

            <div>
              <p className="mb-1 font-medium">📞 Contact:</p>
              <p>
                <a
                  href="tel:+919486223189"
                  className="hover:underline text-sky-600 dark:text-sky-400"
                >
                  +91 94862 23181
                </a>{" "}
                (Secretary Admin – Sivabalan)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">📍 Locate Us</h2>
          <div className="w-full h-64 overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <iframe
              title="PPG Institute of Technology Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.626335055424!2d76.99864987590508!3d11.066282189114812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85722f0e315cd%3A0x2584497e5fcf4b49!2sPPG%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1717146450945!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
