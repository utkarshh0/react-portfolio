import { FaCss3, FaGithub, FaLink, FaHtml5, FaReact} from "react-icons/fa";
import { TbBrandJavascript, TbApi, TbBrandNodejs, TbBrandMongodb } from 'react-icons/tb'
import { SiTailwindcss, SiExpress, SiSocketdotio, SiTypescript } from 'react-icons/si'
import { MdOutlineManageHistory } from "react-icons/md";


import './Projects.css'
import hackhub from '../../assets/projects/hackhub.png'
import numquest from '../../assets/projects/numquest.png'
import blog from '../../assets/projects/blog.png'
import paytm from '../../assets/projects/paytm.png'
import colabsync from '../../assets/projects/colabsync.png'
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
            <img src={blog} height={100} alt="" />
          </div>
          <div className="techs">
            <FaReact />  <SiExpress /> <TbBrandNodejs /> <TbBrandMongodb /> <SiTypescript /> <SiTailwindcss />
          </div>
          <p>Blog Sphere</p>
          <div className="btns">
            <a target="_blank" href="https://blogg-sphere.netlify.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/Blog-Sphere/"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={colabsync} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss /> <SiExpress /> <TbBrandNodejs /> <SiSocketdotio />
          </div>
          <p>CoLabSync</p>
          <div className="btns">
            <a target="_blank" href="https://colabsync.netlify.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/colabsync"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={paytm} height={100} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss /> <SiExpress /> <TbBrandNodejs /> <TbBrandMongodb />
          </div>
          <p>Paytm Wallet</p>
          <div className="btns">
            <a target="_blank" href="https://paytm-wallet-olive.vercel.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/Paytm-Wallet"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>

        <div className="projectCard">
          <div className="img">
            <img src={numquest} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss /> <SiExpress /> <TbBrandNodejs /> <TbBrandMongodb />
          </div>
          <p>NumQuest</p>
          <div className="btns">
            <a target="_blank" href="https://numquestt.netlify.app/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/NumQuest"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>
        
        <div className="projectCard">
          <div className="img">
            <img src={frans} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss />
          </div>
          <p>Frans Hals Museum Replica</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh0.github.io/Frans-Hals-Museum-Replica/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/Frans-Hals-Museum-Replica"><FaGithub /> &nbsp;Github</a>
          </div>
        </div>
       
        <div className="projectCard">
          <div className="img">
            <img src={hackhub} alt="" />
          </div>
          <div className="techs">
            <FaReact /> <SiTailwindcss /> <SiTypescript /> 
          </div>
          <p>HackHub</p>
          <div className="btns">
            <a target="_blank" href="https://utkarshh0.github.io/Frans-Hals-Museum-Replica/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/HackHub"><FaGithub /> &nbsp;Github</a>
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
            <a target="_blank" href="https://utkarshh0.github.io/Weather-App/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/Weather-App"><FaGithub /> &nbsp;Github</a>
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
            <a target="_blank" href="https://utkarshh0.github.io/To-Do-List/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/To-Do-List"><FaGithub /> &nbsp;Github</a>
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
            <a target="_blank" href="https://utkarshh0.github.io/Password-Generator/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/Password-Generator"><FaGithub /> &nbsp;Github</a>
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
            <a target="_blank" href="https://utkarshh0.github.io/Huddle-Landing-Page/"><FaLink /> &nbsp;Live</a>
            <a target="_blank" href="https://github.com/utkarshh0/Huddle-Landing-Page"><FaGithub /> &nbsp;Github</a>
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