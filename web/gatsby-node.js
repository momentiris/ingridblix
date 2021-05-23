async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityWork(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityWork || {}).edges || []

  postEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node

    const path = `/work/${slug.current}/`

    createPage({
      path,
      component: require.resolve('./src/templates/work.js'),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
}
