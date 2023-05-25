import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const metadata = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
          title
          description
          keywords
          email
        }
      }
    `
  )

  return metadata.site
}
