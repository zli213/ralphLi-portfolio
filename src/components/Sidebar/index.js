import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logos from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBlog,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logos} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="'#4d4d4e" />
      </NavLink>
      {/* <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="'#4d4d4e" />
      </NavLink> */}
      <NavLink exact="true" activeclassname="active" to="/blog">
        <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="'#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/slobodan-ivanovic-1b1b1b1b1/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/zli213">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)
export default Sidebar
