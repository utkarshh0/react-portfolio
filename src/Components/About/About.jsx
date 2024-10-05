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
                <p>
                I’m an MCA graduate with a strong background in full-stack development, especially in Java, JavaScript, React, and Tailwind CSS. I’ve had the opportunity to work on a range of projects using the MERN stack, which helped me build a solid understanding of both frontend and backend development, as well as database management with SQL and MongoDB. During my internship at Hunt the Career, I worked on creating responsive and dynamic UIs with React, Tailwind, and Redux, and also handled API integrations. I enjoy problem-solving and learning new things, which is why I’m excited about the opportunity at Stripe, where I can use my skills to contribute to innovative solutions and grow alongside the team.
                </p>
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
