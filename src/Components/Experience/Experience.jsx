import { FaCss3, FaGithub, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { TbApi, TbBrandJavascript, TbBrandNodejs, TbBrandVscode, TbLetterC, TbSql } from 'react-icons/tb'
import { SiCplusplus, SiGnubash, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiTypescript, SiRedux, SiPostman } from 'react-icons/si'
import './Experience.css'
import PropTypes from 'prop-types'

export default function Experience({experienceRef}) {
  return (
    <section ref={experienceRef} id="experience">
        <h5>What skills do I have</h5>
        <h2>My Experience</h2>
        <div className="container cardContainer">
          
          <div className="card">
            <h5 className="cardHeading">Programming Languages</h5>
            <div className="cardContent">
              <div className="cardInfo">
                  <div className="icon">
                    <TbLetterC />
                  </div>
                  <div className="info">
                    <h4>C</h4>
                    <small>Basic</small>
                  </div>
              </div>

            <div className="cardInfo">
                <div className="icon">
                  <SiCplusplus />
                </div>
                <div className="info">
                  <h4>C++</h4>
                  <small>Basic</small>
                </div>
            </div>
            
            <div className="cardInfo">
                <div className="icon">
                  <FaJava />
                </div>
                <div className="info">
                  <h4>Java</h4>
                  <small>Experienced</small>
                </div>
            </div>
            </div>
          </div>

          <div className="card">
            <h5 className="cardHeading">Backend Development</h5>

            <div className="cardContent">
              
              <div className="cardInfo">
                  <div className="icon">
                    <TbSql />
                  </div>
                  <div className="info">
                    <h4>SQL</h4>
                    <small>Experienced</small>
                  </div>
              </div>
              
              <div className="cardInfo">
                  <div className="icon">
                    <SiMysql />
                  </div>
                  <div className="info">
                    <h4>MySQL</h4>
                    <small>Intermediate</small>
                  </div>
              </div>

              <div className="cardInfo">
                  <div className="icon">
                    <TbBrandNodejs />
                  </div>
                  <div className="info">
                    <h4>NodeJs</h4>
                    <small>Intermediate</small>
                  </div>
              </div>

              <div className="cardInfo">
                  <div className="icon">
                    <SiExpress />
                  </div>
                  <div className="info">
                    <h4>Express</h4>
                    <small>Intermediate</small>
                  </div>
              </div>

              <div className="cardInfo">
                  <div className="icon">
                    <SiMongodb />
                  </div>
                  <div className="info">
                    <h4>MongoDB</h4>
                    <small>Intermediate</small>
                  </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h5 className="cardHeading">Frontend Development</h5>
            <div className="cardContent">
              <div className="cardInfo">
                  <div className="icon">
                    <FaHtml5 />
                  </div>
                  <div className="info">
                    <h4>HTML</h4>
                    <small>Experienced</small>
                  </div>
              </div>

            <div className="cardInfo">
                <div className="icon">
                  <FaCss3 />
                </div>
                <div className="info">
                  <h4>CSS</h4>
                  <small>Intermediate</small>
                </div>
            </div>
            
            <div className="cardInfo">
                <div className="icon">
                  <TbBrandJavascript />
                </div>
                <div className="info">
                  <h4>JavaScript</h4>
                  <small>Experienced</small>
                </div>
            </div>
            
            <div className="cardInfo">
                <div className="icon">
                  <SiTypescript />
                </div>
                <div className="info">
                  <h4>TypeScript</h4>
                  <small>Intermediate</small>
                </div>
            </div>

            <div className="cardInfo">
                <div className="icon">
                  <SiTailwindcss />
                </div>
                <div className="info">
                  <h4>Tailwind</h4>
                  <small>Experienced</small>
                </div>
            </div>

            <div className="cardInfo">
                <div className="icon">
                  <FaReact />
                </div>
                <div className="info">
                  <h4>React</h4>
                  <small>Experienced</small>
                </div>
            </div>
            </div>
          </div>

          <div className="card">
            <h5 className="cardHeading">Tools & Technologies</h5>

            <div className="cardContent">
              <div className="cardInfo">
                  <div className="icon">
                    <SiRedux />
                  </div>
                  <div className="info">
                    <h4>Redux</h4>
                    <small>Intermediate</small>
                  </div>
              </div>
              
              <div className="cardInfo">
                  <div className="icon">
                    <FaGithub />
                  </div>
                  <div className="info">
                    <h4>Github</h4>
                    <small>Intermediate</small>
                  </div>
              </div>
              
              <div className="cardInfo">
                  <div className="icon">
                    <SiPostman />
                  </div>
                  <div className="info">
                    <h4>Postman</h4>
                    <small>Intermediate</small>
                  </div>
              </div>

            <div className="cardInfo">
                <div className="icon">
                  <TbApi />
                </div>
                <div className="info">
                  <h4>API</h4>
                  <small>Intermediate</small>
                </div>
            </div>
            
            <div className="cardInfo">
                <div className="icon">
                  <SiGnubash />
                </div>
                <div className="info">
                  <h4>Bash</h4>
                  <small>Basic</small>
                </div>
            </div>

            <div className="cardInfo">
                <div className="icon">
                  <TbBrandVscode />
                </div>
                <div className="info">
                  <h4>VsCode</h4>
                  <small>Intermediate</small>
                </div>
            </div>
            </div>
          </div>

        </div>      
    </section>
  )
}

Experience.propTypes = {
  experienceRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};