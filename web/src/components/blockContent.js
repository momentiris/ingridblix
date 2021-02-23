import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'

const serializers = (withAnchor) => ({
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h2':
          return <h2 className="text-lg font-medium">{children}</h2>
        case 'h3':
          return <h3 className="text-base font-medium">{children}</h3>
        case 'normal':
          return <p className="text-sm">{children}</p>
        default:
          console.warn('Unhandled in portable text serializer: ', node)
          return null
      }
    },
  },
})

const BlockContent = ({ blocks = [], withAnchor = false }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers(withAnchor)} />
)

export default BlockContent
