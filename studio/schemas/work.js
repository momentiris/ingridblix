export default {
  name: 'work',
  type: 'document',
  title: 'Work Item',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the work.',
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year created',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Used by the website to show the post. Should be same as name but with dashes instead of space and lowercase. "The Best Work" becomes "the-best-work. Press [Generate] after you have filled out the name to do this automatically.',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Short Description',
    },
    {
      name: 'materials',
      type: 'string',
      title: 'Materials',
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
      title: 'name',
      slug: 'slug',
      media: 'mainImage',
    },
    prepare({ title = 'No name', slug = {}, media }) {
      const path = `/work/${slug.current}`
      return {
        title,
        media,
        subtitle: path,
      }
    },
  },
}
