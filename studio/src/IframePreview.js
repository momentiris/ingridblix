/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from 'react'

import { format } from 'date-fns'
import styles from './IframePreview.module.css'

/**
 * Explore more examples of previews:
 * https://www.sanity.io/blog/evolve-authoring-experiences-with-views-and-split-panes
 */

const assemblePostUrl = ({ displayed, options }) => {
  const { slug = { current: '' }, _type } = displayed
  const { previewURL } = options

  if (!previewURL) {
    console.warn('Missing previewURL', { previewURL })
    return ''
  }
  const path = _type === 'post' ? '' : `${_type}/${slug.current}/`

  return `${previewURL}/${path}`
}

const IframePreview = (props) => {
  const { options } = props
  const { displayed } = props.document

  if (!displayed) {
    return (
      <div className={styles.componentWrapper}>
        <p>There is no document to preview</p>
      </div>
    )
  }

  const url = assemblePostUrl({ displayed, options })

  if (!url) {
    return (
      <div className={styles.componentWrapper}>
        <p>Hmm. Having problems constructing the web front-end URL.</p>
      </div>
    )
  }

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={'0'} />
      </div>
    </div>
  )
}

export default IframePreview
