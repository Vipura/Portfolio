import { FiShield } from 'react-icons/fi';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

const CERTS = [
  {
    iconType: 'linkedin',
    title: 'Advanced Python',
    desc: 'Provides intermediate level Python training covering advanced concepts and best practices.',
    year: '2018',
    link: 'https://www.linkedin.com/learning/certificates/6bab58cc815a5d4c47723eb0e668335be8917dd729d6cb6f0a00283d251c99a6?u=42314660',
    delayClass: '',
  },
  {
    iconType: 'linkedin',
    title: 'Python Data Analysis',
    desc: 'Covers essential concepts of handling data structures in Python for data analysis workflows.',
    year: '2020',
    link: 'https://www.linkedin.com/learning/certificates/1f81bccb6704edfb21cce7eb3b4737a065b3713741293189cad69208e5c93c87?u=42314660',
    delayClass: 'reveal-delay-1',
  },
  {
    iconType: 'linkedin',
    title: 'Intro to Prompt Engineering for Generative AI',
    desc: 'Covers AI prompting fundamentals — crafting effective prompts for large language models and generative AI systems.',
    year: '2026',
    link: 'https://www.linkedin.com/learning/certificates/8d4324cab739feeb0d2df7a1a0a32c5a6fe49ddd8311c25620049b071a6cd48c?u=42314660',
    delayClass: 'reveal-delay-2',
  },
  {
    iconType: 'linkedin',
    title: 'Microsoft Azure AI Essentials',
    desc: 'Explores Azure AI workloads and machine learning on Azure, covering core cloud AI services and deployment concepts.',
    year: '2026',
    link: 'https://www.linkedin.com/learning/certificates/3c014124b5a94fddf231eb804b52f9ce670a9ae8335d0eb77a56ba29406b7b27?u=42314660',
    delayClass: 'reveal-delay-3',
  },
  {
    iconType: 'linkedin',
    title: 'Advanced Prompt Engineering Techniques',
    desc: 'Dives into advanced strategies for prompt design — few-shot learning, chain-of-thought, and output control techniques.',
    year: '2026',
    link: 'https://www.linkedin.com/learning/certificates/f5de0324dd376c2a1e3599d61c2250a0555fc177f2f419e16b9828380cf144f7?u=42314660',
    delayClass: 'reveal-delay-4',
  },
  {
    iconType: 'linkedin',
    title: 'Python GUI Development with Tkinter',
    desc: 'Covers GUI development in Python using the Tkinter library, focusing on building desktop applications.',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/de93c7a2d8b99f3bd176388c116db878890bec034a212bcbebba28bd29290636?u=42314660',
    delayClass: 'reveal-delay-5',
  },
  {
    iconType: 'shield',
    title: 'Cybersecurity & Networking Systems',
    desc: 'University module covering network administration and security basics. Includes practical experience with Linux, pfSense, and Proxmox virtualization.',
    year: null, // Ongoing
    link: null,
    delayClass: '',
  },
];

export default function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="certifications-header">
          <div className="section-label reveal">
            <span className="dot"></span> Certifications
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            Professional <span className="gradient-text">credentials</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Continuous learning through structured courses and certifications.
          </p>
        </div>

        <div className="certs-grid">
          {CERTS.map((cert, i) => (
            <div className={`cert-card reveal ${cert.delayClass}`} key={i}>
              <div className={cert.iconType === 'linkedin' ? 'cert-icon cert-icon-linkedin' : 'cert-icon'}>
                {cert.iconType === 'linkedin' ? 'in' : <FiShield />}
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.desc}</p>
                <div className="cert-footer">
                  {cert.year ? (
                    <span className="cert-year">{cert.year}</span>
                  ) : (
                    <span
                      className="cert-year"
                      style={{
                        color: 'var(--accent-orange)',
                        border: '1px solid var(--accent-orange-dim)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      Ongoing
                    </span>
                  )}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                      View Certificate
                      <ArrowIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
