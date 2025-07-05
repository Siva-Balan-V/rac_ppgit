import React, { useState, useEffect } from "react";
import { client, urlFor } from '../sanity/client'

// Fallback gallery data
const fallbackImages = [
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
  const [images, setImages] = useState(fallbackImages)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const query = `*[_type == "galleryItem"] | order(date desc) {
          _id,
          title,
          description,
          image,
          category,
          date
        }`
        
        const data = await client.fetch(query)
        
        if (data && data.length > 0) {
          // Map Sanity data to our component format
          const sanityImages = data.map(item => ({
            src: item.image ? urlFor(item.image).width(800).height(600).url() : '/images/default.jpg',
            alt: item.title || item.description || 'Gallery Image',
            title: item.title,
            description: item.description,
            category: item.category,
            date: item.date
          }))
          setImages(sanityImages)
        }
      } catch (error) {
        console.log('Using fallback gallery data:', error)
        // Keep fallback data if Sanity fails
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryItems()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
      </div>
    )
  }

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
                onError={(e) => {
                  e.target.src = '/images/default.jpg'
                }}
              />
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  {image.title || image.alt}
                </h3>
                {image.description && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {image.description}
                  </p>
                )}
                {image.category && (
                  <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded-full">
                    {image.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
