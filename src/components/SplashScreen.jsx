import { useEffect, useRef } from 'react';

const SPLASH_DURATION = 5000;
const PARTICLE_COUNT = 40;
const COLORS = ['#c5ff41', '#f46c38', 'rgba(197, 255, 65, 0.5)', 'rgba(244, 108, 56, 0.4)'];

const firstName = 'Vipura';
const lastName = 'Devnak';

export default function SplashScreen() {
  const splashRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('splash-active');

    // Create floating particles
    const container = particlesRef.current;
    if (container) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.classList.add('splash-particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = 50 + Math.random() * 50 + '%';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
        particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
        particle.style.animationDelay = (Math.random() * 4) + 's';
        container.appendChild(particle);
      }
    }

    // Add glow shimmer to letters after they animate in
    const splash = splashRef.current;
    if (splash) {
      const letters = splash.querySelectorAll('.splash-letter');
      const glowTimeouts = [];
      letters.forEach((letter, idx) => {
        const delay = 400 + idx * 70 + 700;
        const t = setTimeout(() => {
          letter.classList.add('glow');
        }, delay);
        glowTimeouts.push(t);
      });

      // Dismiss splash after duration
      const dismissTimeout = setTimeout(() => {
        splash.classList.add('splash-exit');
        document.body.classList.remove('splash-active');

        const removeTimeout = setTimeout(() => {
          if (splash.parentNode) {
            splash.remove();
          }
        }, 800);
        glowTimeouts.push(removeTimeout);
      }, SPLASH_DURATION);

      return () => {
        glowTimeouts.forEach(clearTimeout);
        clearTimeout(dismissTimeout);
        document.body.classList.remove('splash-active');
      };
    }
  }, []);

  return (
    <div className="splash-screen" id="splash-screen" ref={splashRef}>
      <div className="splash-particles" id="splash-particles" ref={particlesRef}></div>
      <div className="splash-content">
        <div className="splash-line-top"></div>
        <div className="splash-name">
          <span className="splash-first-name">
            {firstName.split('').map((char, i) => (
              <span key={i} className="splash-letter" style={{ '--i': i }}>{char}</span>
            ))}
          </span>
          <span className="splash-last-name">
            {lastName.split('').map((char, i) => (
              <span key={i} className="splash-letter" style={{ '--i': i + firstName.length }}>{char}</span>
            ))}
          </span>
        </div>
        <div className="splash-tagline">
          <span className="splash-tagline-text">Full Stack Developer &amp; CS Undergraduate</span>
        </div>
        <div className="splash-line-bottom"></div>
        <div className="splash-loader">
          <div className="splash-loader-bar"></div>
        </div>
      </div>
      <div className="splash-corner splash-corner-tl"></div>
      <div className="splash-corner splash-corner-tr"></div>
      <div className="splash-corner splash-corner-bl"></div>
      <div className="splash-corner splash-corner-br"></div>
    </div>
  );
}
