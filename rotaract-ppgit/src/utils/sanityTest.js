import { client } from '../sanity/client'

// Test Sanity connection
export const testSanityConnection = async () => {
  try {
    // Simple query to test connection
    const result = await client.fetch('*[_type == "sanity.imageAsset"][0]')
    console.log('✅ Sanity connection successful')
    return { success: true, message: 'Connected to Sanity' }
  } catch (error) {
    console.error('❌ Sanity connection failed:', error)
    return { success: false, message: error.message }
  }
}

// Test function to verify schemas are available
export const testSchemas = async () => {
  try {
    const schemas = [
      'boardMember',
      'project', 
      'galleryItem',
      'event',
      'page',
      'member',
      'gallery'
    ]
    
    const results = {}
    
    for (const schema of schemas) {
      try {
        const count = await client.fetch(`count(*[_type == "${schema}"])`)
        results[schema] = { exists: true, count }
      } catch (error) {
        results[schema] = { exists: false, error: error.message }
      }
    }
    
    console.log('📊 Schema test results:', results)
    return results
  } catch (error) {
    console.error('❌ Schema test failed:', error)
    return { error: error.message }
  }
}

// Function to create sample data (for testing purposes)
export const createSampleData = async () => {
  try {
    // Sample board member
    const sampleBoardMember = {
      _type: 'boardMember',
      name: 'Test President',
      position: 'President',
      bio: 'Sample bio for testing purposes',
      order: 1
    }
    
    // Sample project
    const sampleProject = {
      _type: 'project',
      title: 'Test Project',
      description: 'This is a sample project for testing',
      type: 'Online',
      status: 'Completed',
      date: new Date().toISOString()
    }
    
    // Sample gallery item
    const sampleGalleryItem = {
      _type: 'galleryItem',
      title: 'Test Gallery Item',
      description: 'Sample gallery description',
      category: 'Events',
      date: new Date().toISOString()
    }
    
    const results = await Promise.all([
      client.create(sampleBoardMember),
      client.create(sampleProject),
      client.create(sampleGalleryItem)
    ])
    
    console.log('✅ Sample data created:', results)
    return { success: true, data: results }
  } catch (error) {
    console.error('❌ Failed to create sample data:', error)
    return { success: false, error: error.message }
  }
}

// Run all tests
export const runAllTests = async () => {
  console.log('🧪 Running Sanity integration tests...')
  
  const connectionTest = await testSanityConnection()
  const schemaTest = await testSchemas()
  
  return {
    connection: connectionTest,
    schemas: schemaTest
  }
}
