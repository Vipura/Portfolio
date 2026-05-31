const STACK_DATA = [
  {
    category: 'Programming',
    delayClass: '',
    items: [
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', label: 'Python' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', label: 'Java' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', label: 'SQL' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', label: 'JavaFX' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', label: 'Flutter' },
    ],
  },
  {
    category: 'Web',
    delayClass: 'reveal-delay-1',
    items: [
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', label: 'HTML' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', label: 'CSS' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', label: 'JavaScript' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', label: 'React' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', label: 'Node.js' },
    ],
  },
  {
    category: 'Database',
    delayClass: 'reveal-delay-2',
    items: [
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', label: 'SQL Queries' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', label: 'Database Design' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', label: 'MongoDB' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', label: 'Firebase' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', label: 'Supabase' },
    ],
  },
  {
    category: 'Tools',
    delayClass: 'reveal-delay-3',
    items: [
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', label: 'Git' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', label: 'GitHub', style: { filter: 'invert(1) brightness(2)' } },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', label: 'VS Code' },
      { icon: 'https://img.icons8.com/color/48/microsoft-office-2019.png', label: 'MS Office' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', label: 'Docker' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg', label: 'Arch Linux' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg', label: 'Jupyter' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', label: 'Figma' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', label: 'Postman' },
    ],
  },
];

const SOFT_SKILLS = [
  { emoji: '👑', label: 'Leadership' },
  { emoji: '🔄', label: 'Adaptability' },
  { emoji: '💬', label: 'Communication' },
  { emoji: '🤝', label: 'Teamwork' },
  { emoji: '🧠', label: 'Critical Thinking' },
  { emoji: '🎨', label: 'Creativity' },
];

export default function Stack() {
  return (
    <section className="stack section" id="stack">
      <div className="container">
        <div className="stack-header">
          <div className="section-label reveal">
            <span className="dot"></span> My Stack
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
        </div>

        <div className="stack-rows">
          {STACK_DATA.map((row, rowIdx) => (
            <div className={`stack-row reveal ${row.delayClass}`} key={rowIdx}>
              <div className="stack-category">
                <span className="stack-category-name">{row.category}</span>
              </div>
              <div className="stack-items">
                {row.items.map((item, itemIdx) => (
                  <div className="stack-item" key={itemIdx}>
                    <div className="stack-icon">
                      <img
                        src={item.icon}
                        width="26"
                        height="26"
                        alt={item.label}
                        style={item.style || undefined}
                      />
                    </div>
                    <span className="stack-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-container reveal">
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {SOFT_SKILLS.map((skill, i) => (
              <div className="soft-skill-pill" key={i}>
                <span className="emoji">{skill.emoji}</span> {skill.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
