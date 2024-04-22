import { FaCss3, FaGithub, FaLink, FaHtml5} from "react-icons/fa";
import { TbBrandJavascript, TbApi } from 'react-icons/tb'
import './Projects.css'
import frans from '../../assets/projects/frans.png'
import weather from '../../assets/projects/weather.png'
import todo from '../../assets/projects/todo.png'
import password from '../../assets/projects/password.png'
import portfolio from '../../assets/projects/portfolio.png'
import huddle from '../../assets/projects/huddle.png'
import PropTypes from 'prop-types'

export default function Projects({projectsRef}) {
  return (
    <section id="projects" ref={projectsRef}>
      <h5>My work</h5>
      <h2>Projects</h2>

      <div className="container projectContainer">

        <div className="projectCard">
          <div className="img">
            <img src={frans} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript /> <TbApi />
          </div>
          <p>Frans Hals Museum Replica</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/Frans-Hals-Museum-Replica/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Frans-Hals-Museum-Replica"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={weather} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript /> <TbApi />
          </div>
          <p>Weather Forecast App</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/Weather-App/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Weather-App"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={todo} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript />
          </div>
          <p>To Do App</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/To-Do-List/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/To-Do-List"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={portfolio} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript />
          </div>
          <p>Personal Portfolio</p>
          <div className="btns">
            <a target="_blank" href=""><FaLink /> &nbsp;Live</a>
            <a target="_blank" href=""><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={password} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 /> <TbBrandJavascript />
          </div>
          <p>Password Generator</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/Password-Generator/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Password-Generator"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={huddle} alt="" />
          </div>
          <div className="techs">
            <FaHtml5 /> <FaCss3 />
          </div>
          <p>Huddle Landing Page</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh001.github.io/Huddle-Landing-Page/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/uTkarsHH001/Huddle-Landing-Page"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>
      </div>
    </section>
  )
}


Projects.propTypes = {
  projectsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};