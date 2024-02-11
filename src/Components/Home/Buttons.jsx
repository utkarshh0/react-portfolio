import CV from '../../assets/UtkarshResume.pdf'

export default function Buttons() {

  return (
    <>
      <div className="btns">
        <a className="btn" href={CV} download>Download CV</a>
        <a className="btn btn-primary" href="#contact">Let&apos;s Connect</a>
      </div>
    </>
  )
}
