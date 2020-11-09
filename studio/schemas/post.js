export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          options: { metadata: ['lqip'] },
          fields: [],
        },
      ],
      name: 'images',
    },
  ],
  orderings: [
    {
      name: 'createdDateAsc',
      title: 'Created date new–>old',
      by: [
        {
          field: '_createdAt',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage',
    },
    prepare({ title = 'No name', slug = {}, media }) {
      return {
        title,
        media,
      }
    },
  },
}
