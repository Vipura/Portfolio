import { useEffect, useRef } from 'react';
import { FiCode, FiAward, FiLock } from 'react-icons/fi';
import { MdWavingHand } from 'react-icons/md';

const TITLES = [
  'Full Stack Developer',
  'CS Undergraduate',
  'Python Enthusiast',
  'Web Developer',
];

const STATS = [
  { count: 6, suffix: '+', label: 'Projects' },
  { count: 24, suffix: '+', label: 'Technologies' },
  { count: 7, suffix: '', label: 'Certifications' },
];

const FLOAT_CARDS = [
  { emoji: <FiCode size={24} />, colorClass: 'lime', text: 'Full Stack Dev', sub: 'Python • Java • Web' },
  { emoji: <FiAward size={24} />, colorClass: 'orange', text: 'CS Undergraduate', sub: 'Westminster, UK' },
  { emoji: <FiLock size={24} />, colorClass: 'lime', text: 'Cybersecurity', sub: 'Aspiring Expert' },
];

export default function Hero() {
  const typedRef = useRef(null);
  const statsRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function type() {
      const currentTitle = TITLES[titleIndex];

      if (isDeleting) {
        el.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentTitle.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % TITLES.length;
        speed = 400;
      }

      timeout = setTimeout(type, speed);
    }

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Counter animation
  useEffect(() => {
    const container = statsRef.current;
    if (!container) return;

    const statNumbers = container.querySelectorAll('.hero-stat-number');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.getAttribute('data-count'));
          const suffix = target.getAttribute('data-suffix') || '';
          const prefix = target.getAttribute('data-prefix') || '';
          let current = 0;
          const increment = Math.ceil(finalValue / 40);
          const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
              current = finalValue;
              clearInterval(timer);
            }
            target.textContent = `${prefix}${current}${suffix}`;
          }, 30);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-greeting reveal">
            <span className="wave"><MdWavingHand /></span>
            <span>Hey there, I'm</span>
          </div>

          <h1 className="hero-name reveal reveal-delay-1">
            Vipura<br /><span className="gradient-text">Devnak</span>
          </h1>

          <div className="hero-title reveal reveal-delay-2">
            <span id="typed-text" ref={typedRef}></span>
            <span className="typed-cursor"></span>
          </div>

          <p className="hero-bio reveal reveal-delay-3">
            Motivated Computer Science undergraduate at the University of Westminster (IIT),
            passionate about building clean, efficient solutions with Python, Java, and modern
            web technologies. Always exploring new frontiers in software development and cybersecurity.
          </p>

          <div className="hero-buttons reveal reveal-delay-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
            <a href="Vipura_Devnak_Internship_CV v2.pdf" download className="btn-secondary">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          <div className="hero-stats reveal reveal-delay-5" ref={statsRef}>
            {STATS.map((stat, i) => (
              <div className="hero-stat" key={i}>
                <div
                  className="hero-stat-number"
                  data-count={stat.count}
                  data-suffix={stat.suffix || undefined}
                >
                  {`0${stat.suffix}`}
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-2">
          <div className="hero-image-wrapper">
            <img src="assets/profile.png" alt="Vipura Devnak — Full Stack Developer" id="hero-profile-img" />

            {FLOAT_CARDS.map((card, i) => (
              <div className="hero-float-card" key={i}>
                <div className={`float-icon ${card.colorClass}`}>{card.emoji}</div>
                <div>
                  <div className="float-text">{card.text}</div>
                  <div className="float-sub">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
