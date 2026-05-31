import { FaPython, FaJava } from 'react-icons/fa';
import { FiGlobe, FiLock } from 'react-icons/fi';

const HIGHLIGHTS = [
  { icon: <FaPython />, text: 'Python Development' },
  { icon: <FaJava />, text: 'Java & JavaFX' },
  { icon: <FiGlobe />, text: 'Web Technologies' },
  { icon: <FiLock />, text: 'Cybersecurity' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-image reveal">
          <div className="about-image-frame">
            <img src="assets/Profile%202.png" alt="Vipura Devnak portrait" />
          </div>
          <div className="about-experience-badge">
            <div className="number">2+</div>
            <div className="label">Years Learning</div>
          </div>
        </div>

        <div className="about-text">
          <div className="section-label reveal">
            <span className="dot"></span> About Me
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            Crafting digital experiences with <span className="gradient-text">code &amp; creativity</span>
          </h2>
          <p className="reveal reveal-delay-2">
            I'm a motivated undergraduate student at the University of Westminster (IIT), majoring
            in Computer Science. I'm knowledgeable with Java, Python, SQL, and Excel, and always
            eager to put these skills into practice through meaningful projects.
          </p>
          <p className="reveal reveal-delay-3">
            Beyond development, I'm deeply interested in cybersecurity and aim to further explore
            this field — building expertise in security practices, risk assessment, and data
            protection as part of my long-term career development.
          </p>

          <div className="about-highlights reveal reveal-delay-4">
            {HIGHLIGHTS.map((item, i) => (
              <div className="about-highlight-item" key={i}>
                <span className="icon">{item.icon}</span>
                <span className="text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
