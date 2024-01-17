import Image from 'next/image'

export default function Intro() {
    return (
        <div >
        <Image
        src="/images/LinkedIN.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Joe's Personal headshot"
      />
      <div className="hero-text">
        <h1> Hey, I am Jose </h1>
        <p>
          I'm a software developer based in Salinas, California. Join me as I
          explore the realms of technology, creativity, and user-centric design
          to bring innovative solutions to life.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    )
}