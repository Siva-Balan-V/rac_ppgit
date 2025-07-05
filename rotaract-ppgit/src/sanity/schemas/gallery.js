export default {
  name: 'gallery',
  title: 'Gallery Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      validation: Rule => Rule.required().max(80)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.max(300)
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image'
            }
          }
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Events', value: 'events' },
          { title: 'Projects', value: 'projects' },
          { title: 'Fellowship', value: 'fellowship' },
          { title: 'Awards', value: 'awards' },
          { title: 'Community Service', value: 'community' }
        ]
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage'
    }
  }
}