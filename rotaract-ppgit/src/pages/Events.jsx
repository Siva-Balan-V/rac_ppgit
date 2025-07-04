import React from "react";

const events = [
  {
    src: "/images/orientation.jpg",
    alt: "The Next Chapter – Orientation Program",
    date: "30 Sep 2024",
    link: "#"
  },
  {
    src: "/images/install.jpg",
    alt: "Club Installation 2025–26",
    date: "15 Jul 2025",
    link: "#"
  },
  {
    src: "/images/group1_meet.jpg",
    alt: "Group 1 Fellowship Meet – Ep 04",
    date: "10 Mar 2025",
    link: "#"
  },
  {
    src: "/images/rotaract_day.jpg",
    alt: "World Rotaract Day Celebration",
    date: "13 Mar 2025",
    link: "#"
  },
  {
    src: "/images/talk.jpg",
    alt: "Rotaract Talks – Why I Rotaract?",
    date: "27 Nov 2024",
    link: "#"
  },
  {
    src: "/images/womens_day.jpg",
    alt: "Her Voice. Her Power. – Women’s Day Panel",
    date: "8 Mar 2025",
    link: "#"
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-10 text-gray-800 dark:text-white transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Club Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={event.src}
                alt={event.alt}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{event.alt}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📅 {event.date}</p>
                <a
                  href={event.link}
                  className="inline-block mt-2 px-4 py-2 text-sm font-medium bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
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