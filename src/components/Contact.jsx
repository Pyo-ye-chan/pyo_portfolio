import React, { useState } from 'react';
import { Mail, Phone, Copy, Check } from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('yechan0807@naver.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: <Mail size={28} />,
      label: 'Email',
      value: 'yechan0807@naver.com',
      href: 'mailto:yechan0807@naver.com',
      isEmail: true,
    },
    {
      icon: <Github size={28} />,
      label: 'GitHub',
      value: 'github.com/Pyo-ye-chan',
      href: 'https://github.com/Pyo-ye-chan',
      isEmail: false,
    },
    {
      icon: <Phone size={28} />,
      label: 'Phone',
      value: '010-9069-6199',
      href: 'tel:010-9069-6199',
      isEmail: false,
      isPhone: true,
    },
  ];

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">프로젝트 협업 제안이나 기타 문의사항이 있으시면 아래 연락처로 연락 주세요.</p>

        <div className="contact-cards-grid">
          {contacts.map((contact, idx) => (
            <div key={idx} className="contact-card-custom">
              <div className="contact-card-icon-wrapper">
                {contact.icon}
              </div>
              <h3 className="contact-card-label">{contact.label}</h3>
              
              <a 
                href={contact.href} 
                target={contact.isEmail || contact.isPhone ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                className="contact-card-link"
              >
                {contact.value}
              </a>

              {contact.isEmail && (
                <button 
                  className={`contact-copy-btn ${copied ? 'copied' : ''}`} 
                  onClick={handleCopyEmail}
                  title="이메일 복사하기"
                >
                  {copied ? (
                    <>
                      <Check size={14} /> 복사 완료
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> 이메일 복사
                    </>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
