const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

const PROJECTS = [
  {
    image: 'assets/project-taskmanager.png',
    alt: 'Personal Task Manager Application',
    badge: 'solo',
    badgeText: 'Solo Project',
    title: 'Personal Task Manager',
    desc: 'A full CRUD task manager application built with Python, featuring a Tkinter-based GUI that lets users create, read, update, and delete tasks through an intuitive interface.',
    tech: ['Python', 'Tkinter', 'CRUD', 'GUI'],
    link: 'https://github.com/Vipura/1st-Year-Python-Assessment.git',
    delayClass: '',
  },
  {
    image: 'assets/project-civic.png',
    alt: 'Civic Engagement Platform',
    badge: 'team',
    badgeText: 'Team Project',
    title: 'Civic Engagement Platform',
    desc: 'A collaborative platform where citizens can report infrastructure issues like potholes, poor waste management, or damaged structures — complete with photo uploads and location data.',
    tech: ['Full Stack', 'Team Dev', 'Photo Upload', 'Geolocation'],
    link: 'https://github.com/BinuraBimsara/SDGP-Project-V2.git',
    delayClass: 'reveal-delay-1',
  },
  {
    image: 'assets/project-webdesign.png',
    alt: 'Web Design & Development Project',
    badge: 'team',
    badgeText: 'Team Project',
    title: 'Web Design & Development',
    desc: 'A collaborative web design and development project showcasing responsive design principles, modern UI/UX patterns, and clean frontend implementation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    link: 'https://github.com/Vipura/1st-Year-Web-Development.git',
    delayClass: 'reveal-delay-2',
  },
  {
    image: 'assets/smart_campus_api.png',
    alt: 'Smart Campus API',
    badge: 'solo',
    badgeText: 'Solo Project',
    title: 'Smart Campus API',
    desc: 'A pure JAX-RS backend architecture simulating a Smart Campus environment. Features strictly RESTful endpoints, custom exception mapping, and sub-resource routing without relying on external databases.',
    tech: ['Java', 'JAX-RS', 'RESTful', 'Backend'],
    link: 'https://github.com/Vipura/5COSC022W-Smart-Campus-API.git',
    delayClass: '',
  },
  {
    image: 'assets/network_sniffer.png',
    alt: 'Custom Network Sniffer',
    badge: 'solo',
    badgeText: 'Solo Project',
    title: 'Custom Network Sniffer',
    desc: 'OSI-layer-aware packet sniffer in pure Python with a live cybersecurity dashboard, built without Scapy to demonstrate raw protocol parsing at the bit level.',
    tech: ['Python', 'Cybersecurity', 'Networking', 'OSI Layer'],
    link: 'https://github.com/Vipura/Custom-Network-Sniffer.git',
    delayClass: 'reveal-delay-1',
  },
  {
    image: 'assets/password_vault.png',
    alt: 'Zero-Knowledge Password Vault',
    badge: 'solo',
    badgeText: 'Solo Project',
    title: 'Zero-Knowledge Password Vault',
    desc: 'A privacy-first, zero-knowledge password vault built with Flutter and Dart, featuring AES-256-GCM encryption and a cryptographically secure password generator.',
    tech: ['Flutter', 'Dart', 'Cryptography', 'AES-256'],
    link: 'https://github.com/Vipura/Zero-Knowledge-Password-Vault.git',
    delayClass: 'reveal-delay-2',
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-label reveal">
            <span className="dot"></span> Featured Projects
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            A selection of projects that showcase my skills in software development, from solo experiments to team collaborations.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div className={`project-card reveal ${project.delayClass}`} key={i}>
              <div className="project-card-image">
                <img src={project.image} alt={project.alt} />
                <div className="overlay"></div>
                <span className={`project-card-badge ${project.badge}`}>{project.badgeText}</span>
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
                <div className="project-card-tech">
                  {project.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
                <a href={project.link} className="project-card-link" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                  <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
