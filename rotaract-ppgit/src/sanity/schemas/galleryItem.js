export default {
  name: 'galleryItem',
  title: 'Gallery Items',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Events', value: 'events'},
          {title: 'Projects', value: 'projects'},
          {title: 'Meetings', value: 'meetings'},
          {title: 'Community Service', value: 'community'},
          {title: 'Social', value: 'social'},
          {title: 'Other', value: 'other'}
        ]
      }
    }
  ]
}
