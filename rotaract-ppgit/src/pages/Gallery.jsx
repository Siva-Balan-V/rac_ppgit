import React from "react";

const images = [
  {
    src: "/images/project1.jpg",
    alt: "Project 1 - School Kit Distribution",
  },
  {
    src: "/images/project2.jpg",
    alt: "Project 2 - Rise & Rule Leadership Session",
  },
  {
    src: "/images/project3.jpg",
    alt: "Project 3 - G1 Kudumbathar Meetup",
  },
  {
    src: "/images/project4.jpg",
    alt: "Project 4 - Ra One Marathon",
  },
  {
    src: "/images/project5.jpg",
    alt: "Project 5 - Dynamix 2.0",
  },
  {
    src: "/images/project6.jpg",
    alt: "Project 6 - Club Orientation",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 px-6 py-10 text-gray-800 dark:text-white transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-3 text-center text-sm font-medium">{image.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
