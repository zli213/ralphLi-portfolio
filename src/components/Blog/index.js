import './index.scss'
import Loader from 'react-loaders'
import BlogFrame from './BlogFrame'

const Blog = () => {
  return (
    <>
      <div className="container">
        <BlogFrame
          url="https://www.ralphli.work"
          title="blog"
          allowFullScreen="true"
        />
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Blog
