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
      name: 'image',
      type: 'myImage',
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
    },
  ],
  orderings: [
    {
      name: 'createdDateAsc',
      title: 'Created date new–>old',
      by: [
        {
          field: '_createdAt',
          direction: 'desc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
    },
    prepare({ title = 'No name', slug = { current: 'ok' }, media }) {
      return {
        title,
        media,
      }
    },
  },
}
