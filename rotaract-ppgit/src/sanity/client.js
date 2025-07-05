import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '6rxvlrf8',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'development',
  useCdn: false,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  token: import.meta.env.VITE_SANITY_TOKEN, // Only needed for mutations
})

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

// Helper function to get optimized image URL
export const getImageUrl = (image, width = 800, height = 600) => {
  if (!image) return null
  
  // Handle dereferenced asset (from asset-> query)
  if (image?.asset?.url) {
    return image.asset.url
  }
  
  // Handle asset reference
  if (image?.asset?._ref || image?._ref) {
    return builder.image(image).width(width).height(height).url()
  }
  
  // Handle direct URL
  if (typeof image === 'string') {
    return image
  }
  
  return null
}

// Export urlFor function for compatibility
export const urlFor = (source) => builder.image(source)
