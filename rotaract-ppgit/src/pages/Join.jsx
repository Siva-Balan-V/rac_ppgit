import React from "react";

const Join = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 py-12 text-gray-900 dark:text-white transition-all duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Join Rotaract</h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Be part of a dynamic team of young leaders, committed to community service, professional development, and fellowship. Discover the joy of making a difference!
        </p>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Membership Registration Form</h2>

          <div className="w-full aspect-video">
            <iframe
              title="Join Rotaract Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdy5cRpJY5wNhkL0IbA3S6LqkLROqf2qzrwv0c7k5ZPWTLLJg/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-md border border-gray-300 dark:border-gray-600"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>

          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
            If the form doesn’t load, you can{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdy5cRpJY5wNhkL0IbA3S6LqkLROqf2qzrwv0c7k5ZPWTLLJg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 font-medium underline"
            >
              click here to open it directly
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;
