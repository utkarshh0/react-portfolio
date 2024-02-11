import { MdEmail } from 'react-icons/md'
import { FaTwitter, FaWhatsapp } from 'react-icons/fa'
import './Contact.css'
import PropTypes from 'prop-types'

export default function Contact({contactRef}) {
  return (
    <section ref={contactRef} id="contact">
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className="container">

          <div className="contactContainer">
            <aside>
              <div className="email">
                <div className="icon"><MdEmail /></div>
                <h4>Email</h4>
                <h5>utk.arshh.9.2@gmail.com</h5>
                <button onClick={() => window.open('mailto:utk.arshh.9.3@gmail.com', '_blank')}>Send a message</button>
              </div>
              <div className="whatsapp">
                <div className="icon"><FaWhatsapp /></div>
                <h4>Whatsapp</h4>
                <h5>+6397553165</h5>              
                <button onClick={() => window.open('https://wa.me/6397553165', '_blank')}>Send a message</button>
              </div>
              <div className="twitter">
                <div className="icon"><FaTwitter /></div>
                <h4>Twitter</h4>
                <h5>@uTk_arsHH</h5>
                <button onClick={() => window.open('https://twitter.com/intent/tweet?text=@uT_arsHH', '_blank')}>Send a message</button>
              </div>
            </aside>

            <form action="">
              <input id='name' name='name' type="text" placeholder='Your name' />
              <input id='email' name='email' type="text" placeholder='Your Email' />
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message...'></textarea> 
              <button type='submit'>Send Message</button>           
            </form>
          </div>
        </div>
    </section>
  )
}

Contact.propTypes = {
  contactRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};