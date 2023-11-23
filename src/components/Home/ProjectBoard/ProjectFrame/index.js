import React from 'react'
import './index.scss'

const ProjectFrame = ({ url, title, github_url, frameState, imageSrc }) => {
  return (
    <div className="project-frame">
      {frameState ? (
        <iframe
          src={url}
          title={title}
          width="100%"
          height="600px"
          allowFullScreen
        ></iframe>
      ) : (
        <img className="snapShot" src={imageSrc} alt="" />
      )}
      <button className="btn-primary">
        <a href={github_url}>Github Link</a>
      </button>
    </div>
  )
}

export default ProjectFrame
