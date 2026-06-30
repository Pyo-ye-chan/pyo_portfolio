import React, { useState } from 'react';
import { ExternalLink, ZoomIn, X } from 'lucide-react';

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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      title: '축제로 (FestaRoute)',
      subtitle: '생성형 AI를 활용한 맞춤형 여행 추천 및 지역 축제 통합 플랫폼',
      tags: ['React', 'Spring Boot', 'MyBatis', 'Qdrant (Vector DB)', 'Gemini API', 'Oracle DB'],
      description: '한국관광공사 TourAPI와 Kakao Maps API를 활용해 전국 축제 정보와 위치를 제공하며, Google Gemini API와 Qdrant 벡터 DB RAG(검색 증강 생성) 아키텍처를 결합해 대화형으로 맞춤 여행 코스를 설계해 주는 서비스입니다.',
      highlights: [
        'Qdrant 벡터 DB와 Gemini API를 결합한 RAG(검색 증강 생성) 아키텍처 기반의 자연어 대화형 맞춤 여행 코스 추천 기능 구현',
        'Kakao Maps API 연동을 통해 축제 장소의 위치 정보 시각화 및 경로 동선 렌더링 구현',
        'TourAPI 공공 데이터를 Batch 가공하여 정형(Oracle) 및 비정형(MongoDB) DB에 분산 적재, 데이터 다각화 경험',
        'WebSocket 프로토콜을 사용한 실시간 지역 동행 매칭 및 멀티채팅 시스템 구현',
      ],
      demoUrl: 'https://festaroute.site',
      githubUrl: 'https://github.com/Pyo-ye-chan/project_festaroot_spring',
    },
    {
      id: 2,
      title: 'DonWorry (돈워리)',
      subtitle: '스마트 급여 정산 및 사내 커뮤니티 ERP 플랫폼',
      tags: ['Spring MVC', 'Oracle DB', 'jQuery', 'JSP', 'JSTL', 'FullCalendar API'],
      description: '시간 기반 연장/야간/휴일 근무 수당을 복잡한 세금 공제 규정에 맞게 자동 정산하고 월별 명세서를 발급하며, 캘린더 기반 스케줄 관리 및 Toast UI 마크다운 사내 소통 공간을 통합한 솔루션입니다.',
      highlights: [
        'Toast UI Editor 도입 과정 중 이미지 파일이 Base64 텍스트로 DB에 직저장되던 심각한 저장부하 문제를 발견, 업로드 이미지를 서버 폴더에 물리 저장하고 DB에는 URL 경로만 매핑하는 방식으로 리팩토링하여 DB 부하 원천 차단',
        'AJAX 비동기 통신을 활용하고, DB의 부모 댓글 번호(FK) 계층 구조 및 정렬 쿼리 튜닝을 통해 순서가 꼬이던 대댓글 계층형 출력 안정화',
        'FullCalendar API를 커스텀하여 드래그앤드롭 및 모달 입력창을 통한 직관적인 사원별 스케줄 관리 시스템 구축',
      ],
      demoUrl: 'http://54.180.115.252/',
      githubUrl: 'https://github.com/Pyo-ye-chan/Project_DonWorry',
    },
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">경험을 기반으로 성과를 창출해 낸 주요 개발 프로젝트입니다.</p>

        <div className="drive-banner-custom">
          <p>
            📂 프로젝트의 상세 기획보고서, WBS(작업분할구조도), 설계도 및 최종 발표 자료 등은 <a href="https://drive.google.com/drive/folders/1XLJxtMqYCNxAjnjbSUBtZ_B35Te62x0E?usp=sharing" target="_blank" rel="noopener noreferrer">구글 드라이브 공유 폴더 <ExternalLink size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '2px' }} /></a>에서 열람하실 수 있습니다.
          </p>
        </div>

        <div className="grid-3 projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="project-tag-badge">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.subtitle}</p>
                <p className="project-summary-text">{project.description}</p>
              </div>
              <div className="project-footer">
                <button className="btn-detail-open" onClick={() => setSelectedProject(project)}>
                  상세보기 <ZoomIn size={16} />
                </button>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    <Github size={18} />
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo Link">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <span className="modal-subtitle">{selectedProject.subtitle}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag-badge">{tag}</span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>프로젝트 소개</h4>
                <p>{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h4>핵심 기여 및 기술적 해결 과정</h4>
                <ul>
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github size={18} /> GitHub Repository
              </a>
              <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
