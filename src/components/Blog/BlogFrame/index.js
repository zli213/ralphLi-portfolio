import React from 'react'
import './index.scss'

const BlogFrame = ({ url, title }) => {
  return (
    <div className="project-frame">
      <iframe
        src={url}
        title={title}
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default BlogFrame
