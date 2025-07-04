import React from "react";

const images = [
  {
    src: "/images/project1.jpg",
    alt: "Project 1 – School Kit Distribution",
  },
  {
    src: "/images/project2.jpg",
    alt: "Project 2 – Rise & Rule Leadership Session",
  },
  {
    src: "/images/project3.jpg",
    alt: "Project 3 – G1 Kudumbathar Meetup",
  },
  {
    src: "/images/project4.jpg",
    alt: "Project 4 – Ra One Marathon",
  },
  {
    src: "/images/project5.jpg",
    alt: "Project 5 – Dynamix 2.0",
  },
  {
    src: "/images/project6.jpg",
    alt: "Project 6 – Club Orientation",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-all duration-500 px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Our Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:scale-[1.03] transition-transform duration-300"
              role="group"
              aria-label={image.alt}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center text-sm font-medium text-gray-800 dark:text-gray-200">
                {image.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
