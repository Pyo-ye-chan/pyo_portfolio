import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: '자바 풀스택 & 생성형 AI 서비스 개발 과정 이수',
      company: '한국정보교육원 (KEDU)',
      period: '2025.12 ~ 2026.07 (수료예정)',
      description: '현업 실무 위주의 풀스택 개발과 생성형 AI 응용 프로젝트 구현 중심의 집중 교육을 이수했습니다.',
      details: [
        'Java(OOP), JSP/Servlet, Spring Framework, Spring Boot, MyBatis 기반 백엔드 아키텍처 학습',
        'React, JavaScript, jQuery, HTML5, CSS3 기반의 사용자 반응형 UI 구현 기술 습득',
        'Gemini API RAG(검색 증강 생성) 기법과 Vector DB 활용 인공지능 추천 웹 통합 프로젝트 완수',
        'Git 형상관리 담당자 역할을 수행하여 병합 관리 및 팀 공동 개발 프로세스 리드',
      ],
    },
    {
      id: 2,
      role: '사무보조 (사원)',
      company: '주식회사 지니글로벌',
      period: '2025.03 ~ 2025.11',
      description: '데이터 정리, 일반 사무 업무 보조 및 문서 작성을 전담하며 비즈니스 협업 프로세스를 익혔습니다.',
      details: [
        '효율적인 오피스 툴(Excel 등) 활용을 통한 대용량 데이터 전산 입력 속도 및 정확성 개선',
        '사내 커뮤니케이션 문서 규격 정리 및 원활한 협업을 위한 비즈니스 소통 예절 체득',
      ],
    },
    {
      id: 3,
      role: '차량 보수 도장 기술직 (사원)',
      company: '혼다 안호모터스 & 성동 모터스CS',
      period: '2020.02 ~ 2023.09 (군복무 기간 제외)',
      description: '품질의 극대화와 정밀 공정이 요구되는 수입차량 복원 도장 실무 엔지니어로 근무했습니다.',
      details: [
        '작은 점 하나, 흠집 한 부분도 용납하지 않는 정교한 품질 집중으로 고객 클레임 0건 유지',
        '적극적 태도로 입사 2개월 만에 핵심 공정에 단독 투입되어 생산 효율성에 직접 기여',
        '목표를 설정하면 조기 출근 및 잔업 등을 동반하여 끝까지 완수해 내는 끈기와 실행력 함양',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <p className="section-subtitle">현재까지 쌓아온 개발 실무 및 프로젝트 경험의 기록입니다.</p>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-period">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                </div>
                <p className="timeline-desc">{exp.description}</p>
                <ul className="timeline-details">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
