import './index.scss'
import ProjectFrame from './ProjectFrame'
import blogPage from '../../../assets/images/blogPage.png'
import moviePitch from '../../../assets/images/moviePitch.png'
const ProjectBoard = () => {
  return (
    <div className="project-container">
      <div className="topRow">
        <ProjectFrame
          url="https://google-search-demo-lovat.vercel.app/"
          title="google-search-demo"
          github_url="https://github.com/zli213/GoogleSearchDemo.git"
          frameState={true}
        />
        <ProjectFrame
          url="https://react-practice01.vercel.app/"
          title="react-practice01"
          github_url="https://github.com/zli213/ReactPractice01.git"
          frameState={true}
        />
      </div>
      <div className="middleRow">
        <ProjectFrame
          frameState={false}
          imageSrc={blogPage}
          github_url="https://github.com/zli213/BlogAdminApp/tree/main/group-3-s1-23-v1"
        />
        <ProjectFrame
          frameState={false}
          imageSrc={moviePitch}
          github_url="https://github.com/zli213/MoviePitcherChatGPTDemo.git"
        />
      </div>
      <div className="bottomRow">
        <a
          href="https://github.com/zli213/SynergyStudy/tree/develop"
          className="ongoing-projects-link"
        >
          Work in Progress
        </a>
      </div>
    </div>
  )
}

export default ProjectBoard
