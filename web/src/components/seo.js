import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export function SEO({
  title = '',
  lang = 'en',
  meta = [],
  description = '',
  children,
}) {
  const {
    title: defaultTitle = 'Ingrid Blix',
    description: defaultDescription,
    author = 'https://github.com/momentiris',
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:type" content="website" />
      <meta name="og:description" content={seo.description} />
      <meta name="og:author" content={seo.author} />
      {children}
    </>
  )
}

export default SEO
