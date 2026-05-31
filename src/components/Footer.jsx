export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Vipura<span>.</span></div>
          <div className="footer-links">
            <a href="#about" onClick={(e) => handleClick(e, '#about')}>About</a>
            <a href="#skills" onClick={(e) => handleClick(e, '#skills')}>Skills</a>
            <a href="#projects" onClick={(e) => handleClick(e, '#projects')}>Projects</a>
            <a href="#education" onClick={(e) => handleClick(e, '#education')}>Education</a>
            <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Vipura Devnak. Crafted with <span className="heart">♥</span> in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
