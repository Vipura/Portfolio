import { useState, useCallback } from 'react';

const CONTACT_ITEMS = [
  {
    href: 'mailto:vipuradevnak@gmail.com',
    isLink: true,
    iconClass: 'lime',
    icon: '📧',
    label: 'Email',
    value: 'vipuradevnak@gmail.com',
    delayClass: 'reveal-delay-2',
  },
  {
    href: 'tel:+94703960848',
    isLink: true,
    iconClass: 'orange',
    icon: '📱',
    label: 'Phone',
    value: '+94 703 960 848',
    delayClass: 'reveal-delay-3',
  },
  {
    href: null,
    isLink: false,
    iconClass: 'lime',
    icon: '📍',
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
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
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
