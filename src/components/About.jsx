import React from 'react';
import { User, Code2, Users2, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { label: '교육 이수', value: '800시간+' },
    { label: '수행 프로젝트', value: '2개' },
    { label: '기술 역량', value: '15+ Stacks' },
  ];

  const values = [
    {
      icon: <Sparkles size={24} className="value-icon" />,
      title: '목표 달성을 위한 실행력',
      description: '고등학교 시절부터 뚜렷한 목표(자격증 취득, 조기 취업)를 세워 끝까지 완수하는 강력한 추진력을 보유하고 있습니다.',
    },
    {
      icon: <Code2 size={24} className="value-icon" />,
      title: '품질을 결정하는 꼼꼼함',
      description: '작은 흠집 하나가 품질을 바꾸는 도장 실무 경험을 바탕으로, 코드 하나도 세밀하게 작성하고 오류 가능성을 철저히 검증합니다.',
    },
    {
      icon: <Users2 size={24} className="value-icon" />,
      title: '조율을 이끄는 협업 태도',
      description: '팀 내에서 자처하여 형상관리(Git)를 담당하며 병합 충돌을 조율하고 팀원 간 소통을 매끄럽게 연결합니다.',
    },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">단단하고 정교한 개발을 추구하는 개발자, 표예찬을 소개합니다.</p>

        <div className="grid-2 about-content">
          <div className="about-text-container">
            <h3 className="about-greeting">코드 한 줄이 시스템에 미치는 영향력을 먼저 고민합니다.</h3>
            <p className="about-bio">
              한국정보교육원에서 자바 풀스택 & 생성형 AI 서비스 개발 과정을 이수하며 Java, Spring Boot, React, Oracle DB, RAG 기반 AI 검색 연동 등 실무 중심의 기술을 학습했습니다.
              다양한 직무 경험(사무보조, 차량보수도장)을 통해 뛰어난 적응력과 업무 성실함을 쌓아왔습니다.
              소통과 코드 리뷰를 통해 동료와 동반 성장하며 비즈니스 로직을 정교하고 단단하게 안정화하는 개발자가 되겠습니다.
            </p>

            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-values">
            <h3 className="values-title">My Value & Core</h3>
            <div className="values-list">
              {values.map((val, idx) => (
                <div key={idx} className="value-card">
                  <div className="value-icon-wrapper">{val.icon}</div>
                  <div className="value-info">
                    <h4 className="value-name">{val.title}</h4>
                    <p className="value-desc">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
