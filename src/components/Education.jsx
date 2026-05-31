import { useEffect, useRef } from 'react';

const TIMELINE_ITEMS = [
  {
    date: '2025 — 2028',
    title: 'BSc (Hons) Computer Science',
    institution: 'University of Westminster, UK (via IIT)',
    desc: 'Currently pursuing an undergraduate degree in Computer Science, focusing on software development, data structures, algorithms, and cybersecurity fundamentals.',
    delayClass: '',
  },
  {
    date: '2015 — 2024',
    title: "O/L's & A/L's",
    institution: 'Mahinda Rajapaksha College',
    desc: 'Successfully completed Ordinary Level and Advanced Level examinations, building a strong academic foundation.',
    delayClass: 'reveal-delay-2',
  },
];

export default function Education() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const onScroll = () => {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.7;
      const scrolledPast = startOffset - rect.top;
      const animationDistance = rect.height;

      let progress = 0;
      if (scrolledPast > 0) {
        progress = (scrolledPast / animationDistance) * 100;
      }
      progress = Math.max(0, Math.min(100, progress));
      timeline.style.setProperty('--scroll-progress', `${progress}%`);
    };

    window.addEventListener('scroll', onScroll);
    // Trigger once to set initial state
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="education-header">
          <div className="section-label reveal">
            <span className="dot"></span> Education
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            My academic <span className="gradient-text">journey</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            From school to university — building a strong foundation in computer science and technology.
          </p>
        </div>

        <div className="timeline" ref={timelineRef}>
          {TIMELINE_ITEMS.map((item, i) => (
            <div className={`timeline-item reveal ${item.delayClass}`} key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <div className="institution">{item.institution}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
