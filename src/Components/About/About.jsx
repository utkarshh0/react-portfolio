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
            Continuously exploring new challenges and opportunities, I am a passionate and dedicated software developer with expertise in a wide range of programming languages and web technologies. My project portfolio reflects my commitment to creating innovative, user-centric solutions. I thrive in collaborative environments, utilizing problem-solving skills and a curious mindset to overcome challenges. With a Master&apos;s in Computer Application, I am well-equipped to contribute effectively to dynamic and challenging projects.
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
