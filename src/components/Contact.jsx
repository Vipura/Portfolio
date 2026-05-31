import { useState, useCallback } from 'react';
import { FiMail, FiSmartphone, FiMapPin } from 'react-icons/fi';

const CONTACT_ITEMS = [
  {
    href: 'mailto:vipuradevnak@gmail.com',
    isLink: true,
    iconClass: 'lime',
    icon: <FiMail size={24} />,
    label: 'Email',
    value: 'vipuradevnak@gmail.com',
    delayClass: 'reveal-delay-2',
  },
  {
    href: 'tel:+94703960848',
    isLink: true,
    iconClass: 'orange',
    icon: <FiSmartphone size={24} />,
    label: 'Phone',
    value: '+94 703 960 848',
    delayClass: 'reveal-delay-3',
  },
  {
    href: null,
    isLink: false,
    iconClass: 'lime',
    icon: <FiMapPin size={24} />,
    label: 'Location',
    value: 'Pannipitiya, Sri Lanka',
    delayClass: 'reveal-delay-4',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    const fieldMap = {
      'form-name': 'name',
      'form-email': 'email',
      'form-subject': 'subject',
      'form-message': 'message',
    };
    setFormData(prev => ({ ...prev, [fieldMap[id]]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:vipuradevnak@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  }, [formData]);

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-info">
          <div className="section-label reveal">
            <span className="dot"></span> Get In Touch
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Have a project in mind or want to discuss an opportunity?
            I'm always open to new connections and collaborations.
          </p>

          <div className="contact-items">
            {CONTACT_ITEMS.map((item, i) => {
              const content = (
                <>
                  <div className={`contact-item-icon ${item.iconClass}`}>{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </>
              );

              return item.isLink ? (
                <a href={item.href} className={`contact-item reveal ${item.delayClass}`} key={i}>
                  {content}
                </a>
              ) : (
                <div className={`contact-item reveal ${item.delayClass}`} key={i}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="social-links reveal reveal-delay-5">
            {/* GitHub */}
            <a href="https://github.com/Vipura" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/vipura-devnak-882b9a34a/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:vipuradevnak@gmail.com" className="social-link" aria-label="Send email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/don_vipura/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper reveal reveal-delay-1">
          <h3>Send me a message</h3>
          <p className="form-subtitle">Fill out the form and I'll get back to you shortly.</p>

          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="form-name">Your Name</label>
              <input type="text" id="form-name" placeholder="John Doe" required onChange={handleChange} value={formData.name} />
            </div>
            <div className="form-group">
              <label htmlFor="form-email">Your Email</label>
              <input type="email" id="form-email" placeholder="john@example.com" required onChange={handleChange} value={formData.email} />
            </div>
            <div className="form-group">
              <label htmlFor="form-subject">Subject</label>
              <input type="text" id="form-subject" placeholder="Project inquiry" onChange={handleChange} value={formData.subject} />
            </div>
            <div className="form-group">
              <label htmlFor="form-message">Message</label>
              <textarea id="form-message" placeholder="Tell me about your project or opportunity..." required onChange={handleChange} value={formData.message}></textarea>
            </div>
            <button type="submit" className="form-submit">
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
