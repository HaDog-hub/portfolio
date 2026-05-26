import { useEffect, useState } from "react";
import {
  featuredProject,
  projectDetails,
  secondaryProjects,
} from "./data/projects";

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Nav() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到首頁">
        <span className="brand-mark">HaDog</span>
        <span>Portfolio</span>
      </a>
      <nav className="nav-links" aria-label="主要導覽">
        <a href="#projects">作品</a>
        <a href="#contact">聯絡我</a>
      </nav>
    </header>
  );
}

function ImageFrame({ image, compact = false, onOpen, titleOverride }) {
  return (
    <figure className={compact ? "image-frame compact" : "image-frame"}>
      <button
        className="image-trigger"
        type="button"
        onClick={() => onOpen(image)}
        aria-label={`查看大圖：${image.title}`}
      >
        <div className="window-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <img src={image.src} alt={image.title} loading="lazy" />
        <span className="image-overlay">點擊查看大圖</span>
      </button>
      {image.caption || titleOverride || image.status ? (
        <figcaption>
          <strong>{image.title}</strong>
          {titleOverride ? <b>{titleOverride}</b> : null}
          {image.caption ? <span>{image.caption}</span> : null}
          {image.status ? <em>{image.status}</em> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("is-lightbox-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("is-lightbox-open");
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.title}>
      <button className="lightbox-backdrop" type="button" onClick={onClose} aria-label="關閉大圖" />
      <div className="lightbox-panel">
        <div className="lightbox-header">
          <strong>{image.title}</strong>
          <button type="button" onClick={onClose}>
            關閉
          </button>
        </div>
        <img src={image.src} alt={image.title} />
      </div>
    </div>
  );
}

function SystemPreview({ compact = false }) {
  return (
    <div className={compact ? "system-preview compact" : "system-preview"}>
      <div className="window-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-shell">
        <div className="preview-sidebar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-content">
          <div className="preview-toolbar">
            <span />
            <span />
          </div>
          <div className="gantt">
            {[0, 1, 2, 3].map((row) => (
              <div className="gantt-row" key={row}>
                <span className="row-label" />
                <span className={`task task-${row + 1}`} />
                <span className="task task-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ onOpenImage }) {
  return (
    <article className="featured-card">
      <div className="featured-copy">
        <h2>{featuredProject.title}</h2>
        <p className="lead">{featuredProject.summary}</p>
        <p className="muted">{featuredProject.description}</p>
        <div className="point-list">
          {featuredProject.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
        <div className="tag-row">
          {featuredProject.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="card-actions">
          <a className="button primary" href={featuredProject.links.github}>
            GitHub Repo
          </a>
          <a className="button ghost" href="#surgery">
            查看設計重點
          </a>
        </div>
      </div>
      <ImageFrame
        image={{ src: featuredProject.cover, title: "首頁甘特圖" }}
        onOpen={onOpenImage}
      />
    </article>
  );
}

function ProjectCard({ project, index, onOpenImage }) {
  return (
    <article className="project-card">
      <div className="card-meta">
        <span>0{index + 2}</span>
        {project.metric ? <strong>{project.metric}</strong> : null}
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="mini-preview">
        <ImageFrame
          image={{ src: project.cover, title: project.title }}
          compact
          onOpen={onOpenImage}
        />
      </div>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <div className="card-actions">
        <a className="button primary" href={project.links.github}>
          GitHub Repo
        </a>
        <a className="button ghost" href={`#${project.id}`}>
          查看設計重點
        </a>
        {project.links.demo ? (
          <a className="button ghost" href={project.links.demo}>
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Projects({ onOpenImage }) {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">Selected Work</p>
      <FeaturedCard onOpenImage={onOpenImage} />
      <div className="project-grid">
        {secondaryProjects.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            key={project.title}
            onOpenImage={onOpenImage}
          />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ onOpenImage }) {
  return (
    <section id="case-study" className="section case-section">
      <div className="detail-stack">
        {projectDetails.map((project) => (
          <article className="detail-section" id={project.id} key={project.id}>
            <div className="detail-heading">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            {project.highlights ? (
              <div className="case-grid">
                {project.highlights.map((highlight, index) => (
                  <div className="case-note" key={highlight.title}>
                    <span>0{index + 1}</span>
                    <strong>{highlight.title}</strong>
                    <p>{highlight.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {project.awards ? (
              <div className="award-section">
                <p className="subheading">作品榮譽</p>
                <div className="award-grid">
                  {project.awards.map((award) => (
                    <ImageFrame
                      image={{
                        src: award.src,
                        title: award.title,
                        caption: award.note,
                        status: award.status,
                        fit: award.fit,
                      }}
                      key={award.title}
                      titleOverride={award.label}
                      compact
                      onOpen={onOpenImage}
                    />
                  ))}
                </div>
              </div>
            ) : null}
            <div className="screenshot-grid">
              <p className="subheading">作品展示</p>
              {project.images.map((image) => (
                <ImageFrame
                  image={image}
                  key={image.title}
                  compact={!image.featured}
                  onOpen={onOpenImage}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const contactItems = [
    ["Email", "yongjun0423@gmail.com"],
    ["Phone", "+886 975 677 638"],
    ["GitHub", "github.com/HaDog-hub"],
  ];

  return (
    <section id="contact" className="contact-section">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>聯絡我</h2>
        <p>
          如果你想進一步了解我的專案、履歷或面試安排，可以透過以下資訊與我聯繫。
        </p>
      </div>
      <div className="contact-grid">
        {contactItems.map(([label, value]) => (
          <div className="contact-item" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div id="top" className="app">
      <Nav />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-role">AI Application / Full-stack Systems / Reinforcement Learning</p>
            <h1>
              把演算法、RAG 與強化學習
              <span>做成可操作的工程系統。</span>
            </h1>
            <p>
              我專注於將 AI、排程最佳化與資料密集型介面整合成可使用的系統。
              <span>
                具備 React 前端、FastAPI / Spring Boot 後端與演算法實作經驗。
              </span>
            </p>
            <p className="hero-name">林永濬 Julian</p>
            <div className="hero-tags" aria-label="核心技術">
              {["React", "Spring Boot", "FastAPI", "RAG", "PPO"].map(
                (tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ),
              )}
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                查看作品
              </a>
              <a className="button secondary" href="https://github.com/HaDog-hub">
                GitHub
              </a>
            </div>
          </div>
        </section>
        <Projects onOpenImage={setActiveImage} />
        <CaseStudy onOpenImage={setActiveImage} />
        <Contact />
      </main>
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}
