import React from "react";

const events = [
  {
    src: "/images/orientation.jpg",
    alt: "The Next Chapter – Orientation Program",
    date: "30 Sep 2024",
    link: "#",
  },
  {
    src: "/images/install.jpg",
    alt: "Club Installation 2025–26",
    date: "15 Jul 2025",
    link: "#",
  },
  {
    src: "/images/group1_meet.jpg",
    alt: "Group 1 Fellowship Meet – Ep 04",
    date: "10 Mar 2025",
    link: "#",
  },
  {
    src: "/images/rotaract_day.jpg",
    alt: "World Rotaract Day Celebration",
    date: "13 Mar 2025",
    link: "#",
  },
  {
    src: "/images/talk.jpg",
    alt: "Rotaract Talks – Why I Rotaract?",
    date: "27 Nov 2024",
    link: "#",
  },
  {
    src: "/images/womens_day.jpg",
    alt: "Her Voice. Her Power. – Women’s Day Panel",
    date: "8 Mar 2025",
    link: "#",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-all duration-500 px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Club Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition duration-300 flex flex-col"
            >
              <img
                src={event.src}
                alt={event.alt}
                loading="lazy"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5 flex-grow flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{event.alt}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">📅 {event.date}</p>
                </div>
                <a
                  href={event.link}
                  className="inline-block mt-4 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-md transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
