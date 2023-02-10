const CATEGORY = [
  { title: 'Architecture', value: 'architecture' },
  { title: 'Neon', value: 'neon' },
  { title: 'Landscape', value: 'landscape' },
]

const RATIOS = [
  { title: 'Landscape', value: 'landscape' },
  { title: 'Portrait', value: 'portrait' },
  { title: 'Square', value: 'square' },
]

export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'document',
  fields: [
    {
      title: 'Image Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('Image Title is required'),
        Rule.min(3).error('Title must be between 3 and 50 characters'),
        Rule.max(50).warning('Shorter titles are usually better'),
      ],
    },
    {
      title: 'Image Ratio',
      name: 'ratio',
      type: 'string',
      initialValue: 'landscape',
      options: {
        list: RATIOS,
        layout: 'radio',
      },
      validation: (Rule: any) =>
        Rule.required().error('Image Ratio is required'),
    },
    {
      title: 'Image Category',
      name: 'category',
      type: 'string',
      initialValue: 'architecture',
      options: {
        list: CATEGORY,
      },
      validation: (Rule: any) =>
        Rule.required().error('Image Category is required'),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      option: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required().error('Image is required'),
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
          validation: (Rule: any) => [
            Rule.required().error('Alt text is required'),
            Rule.min(3).error('Alt text must be between 3 and 50 characters'),
            Rule.max(50).warning('Shorter alt text are usually better'),
          ],
        },
      ],
    },
  ],
}
