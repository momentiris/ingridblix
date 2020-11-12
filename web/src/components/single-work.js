import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

const Component = ({ post }) => {
  const images = post.images.map((image) =>
    getFluidGatsbyImage(
      image.asset,
      { maxWidth: 700 },
      { projectId: 'r641vock', dataset: 'ingridblix_dataset' }
    )
  )

  return (
    <article>
      {post.name && (
        <h1 className="text-2xl font-semibold italic">
          {post.name} ({post.year})
        </h1>
      )}
      {post.materials && <p className="text-sm mb-4">{post.materials}</p>}
      {post.shortDescription && (
        <h3 className="text-lg">{post.shortDescription}</h3>
      )}

      <div className="mt-2">
        {images.map((props, index) => (
          <div className="mb-8 max-w-2xl" key={index}>
            <Img fluid={props} />
          </div>
        ))}
      </div>
    </article>
  )
}

export default Component
