export default {
  name: 'member',
  title: 'Club Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required().max(80)
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: Rule => Rule.max(300)
    },
    {
      name: 'joinDate',
      title: 'Join Date',
      type: 'date'
    },
    {
      name: 'classification',
      title: 'Classification',
      type: 'string'
    },
    {
      name: 'college',
      title: 'College/Institution',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year of Study',
      type: 'string',
      options: {
        list: [
          { title: '1st Year', value: '1' },
          { title: '2nd Year', value: '2' },
          { title: '3rd Year', value: '3' },
          { title: '4th Year', value: '4' },
          { title: 'Graduate', value: 'graduate' },
          { title: 'Professional', value: 'professional' }
        ]
      }
    },
    {
      name: 'interests',
      title: 'Interests/Hobbies',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'isActive',
      title: 'Active Member',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'college',
      media: 'image'
    }
  }
}