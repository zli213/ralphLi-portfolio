import React from 'react'
import './index.scss'

const ProjectFrame = ({ url, title, github_url, frameState }) => {
  return (
    <div className="project-frame">
      {frameState ? (
        <iframe
          src={url} // 使用传入的 url 作为 iframe 的 src
          title={title} // 使用传入的 title 作为 iframe 的标题
          width="100%"
          height="600px" // 根据需要调整高度
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <img className="snapShot" src="" alt="" />
      )}
      <button className="btn-primary">
        <a href={github_url}>Github Link</a>
      </button>
    </div>
  )
}

export default ProjectFrame
