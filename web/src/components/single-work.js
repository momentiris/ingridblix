import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

const Component = ({ post }) => {
  const images = post.images.map((image) =>
    getFluidGatsbyImage(
      image.asset._id,
      { width: 700 },
      { projectId: 'r641vock', dataset: 'ingridblix_dataset' }
    )
  )

  return (
    <article>
      <h1 className="text-2xl font-semibold italic">{post.name}</h1>
      {post.shortDescription && <p>{post.shortDescription}</p>}
      {images.map((fluidProps, index) => (
        <div className="mb-8 max-w-2xl" key={index}>
          <Img fluid={fluidProps} />
        </div>
      ))}
    </article>
  )
}

export default Component
