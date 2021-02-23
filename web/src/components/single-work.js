import React from 'react'
import Img from 'gatsby-image'
import { sanityClient } from '../client'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import BlockContent from './blockContent'
import imageUrlBuilder from '@sanity/image-url'

const Component = ({ post }) => {
  const builder = imageUrlBuilder(sanityClient)
  const urlFor = (source) => builder.image(source)

  const images =
    post.images.map((image, index) => {
      if (image.crop) {
        return (
          <img
            className="mb-8 max-w-4xl"
            key={index}
            alt={image.alt || 'blog post '}
            src={urlFor(image).maxWidth(1200).url()}
          />
        )
      }

      const fluidImg = getFluidGatsbyImage(
        image.asset,
        { maxWidth: 700 },
        sanityClient
      )

      return (
        <div className="mb-8 max-w-4xl">
          <Img key={index} fluid={fluidImg} />
        </div>
      )
    }) ?? []

  return (
    <article>
      {post.name && <h1 className="text-xl font-medium italic">{post.name}</h1>}
      {post.materials && <p className="text-sm mt-1">{post.materials}</p>}
      {post._rawBody && (
        <div className="my-6">
          <BlockContent blocks={post._rawBody} />
        </div>
      )}
      <div className="mt-2">{images}</div>
    </article>
  )
}

export default Component
