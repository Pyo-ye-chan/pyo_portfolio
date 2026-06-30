import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Core (주요 기술)',
      description: '설계부터 비즈니스 로직 구현까지 주도적으로 활용할 수 있는 핵심 기술 스택입니다.',
      skills: [
        'Java (OOP)',
        'Spring Boot',
        'Spring MVC',
        'MyBatis / JDBC',
        'Oracle DB',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Git & GitHub (VCS)',
      ],
      badgeClass: 'badge-core',
    },
    {
      title: 'Familiar (활용 가능 기술)',
      description: '프로젝트 적용 경험이 있으며, 문서를 참고하여 협업 및 구현 가능한 기술 스택입니다.',
      skills: [
        'React',
        'jQuery',
        'JSP / JSTL',
        'MySQL',
        'MongoDB',
        'Node.js & Express',
        'Gemini API & RAG',
        'Qdrant (Vector DB)',
        'AWS (EC2)',
        'Notion (PM)',
        'Flutter',
      ],
      badgeClass: 'badge-familiar',
    },
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <p className="section-subtitle">
          주도적으로 개발할 수 있는 주요 기술과 협업 및 확장이 가능한 기술 스택 분류입니다.
        </p>

        <div className="skills-grid-custom">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="skill-category-card-custom">
              <div className="category-header-custom">
                <h3 className="category-title-custom">{category.title}</h3>
                <p className="category-desc-custom">{category.description}</p>
              </div>
              <div className="skills-tags-container">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className={`skill-tag-custom ${category.badgeClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
