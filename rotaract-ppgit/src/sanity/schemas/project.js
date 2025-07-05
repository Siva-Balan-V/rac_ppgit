export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'date',
      title: 'Project Date',
      type: 'date'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Community Service', value: 'community'},
          {title: 'Environmental', value: 'environment'},
          {title: 'Educational', value: 'education'},
          {title: 'Health & Wellness', value: 'health'},
          {title: 'Youth Development', value: 'youth'},
          {title: 'International Service', value: 'international'},
          {title: 'Other', value: 'other'}
        ]
      }
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Completed', value: 'completed'},
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Planned', value: 'planned'}
        ]
      },
      initialValue: 'planned'
    }
  ]
}
