import './About.css'
import Me from '../../assets/utk.png'
import PropTypes from 'prop-types'

export default function About({aboutRef}) {
  return (
    <section id="about" ref={aboutRef}>
        <h5>Get to know me</h5>
        <h2>About Me</h2>

        <div className="container">
          <div className="aboutMe">
            <div className="aboutMeImage">
              <img src={Me} alt="" />
              {/* <div className="rt"></div> */}
            </div>
            <div className="aboutMeInfo">
                <b>Innovative Full Stack Developer Specializing in MERN Stack and Real-Time Applications.</b> <br /><br />
                Passionate about creating scalable, secure, and user-friendly web solutions. Expertise in building intuitive interfaces with React and Tailwind CSS, and robust backends with Node.js and Express. Proven track record in delivering high-quality projects, including digital wallets, collaborative editors, and UI clones. Strong problem-solving skills and a commitment to continuous learning and improvement.
              <a className='btn' href="#contact">Let&apos;s Connect</a>
            </div>
          </div>
        </div>      
    </section>
  )
}

About.propTypes = {
  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
