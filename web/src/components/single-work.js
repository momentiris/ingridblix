import React from 'react'
import Img from 'gatsby-image'
import BlockContent from './blockContent'
import { getFluidImage, urlFor } from '../utils'

const Component = ({ post }) => (
  <article>
    {post.name && <h1 className="text-xl font-medium italic">{post.name}</h1>}
    {post.materials && <p className="text-sm mt-1">{post.materials}</p>}
    {post._rawBody && (
      <div className="my-6">
        <BlockContent blocks={post._rawBody} />
      </div>
    )}
    <div className="mt-2 flex flex-col gap-8">
      {post.images.map((image) => (
        <a
          className="w-full"
          href={image.asset.url}
          target="_blank"
          rel="noopener noreferrer"
          key={image.asset._id}
        >
          {getImage(image)}
        </a>
      ))}
    </div>
  </article>
)

const getImage = (image) => {
  if (image.crop) {
    return (
      <img
        key={image.id}
        alt={image.alt || 'blog post'}
        src={urlFor(image).fit('max').url()}
      />
    )
  }

  const fluidImg = getFluidImage(image.asset, { maxWidth: 700 })

  return <Img key={image.id} fluid={fluidImg} />
}

export default Component
