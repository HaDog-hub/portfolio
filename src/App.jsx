import {
  featuredProject,
  projectDetails,
  secondaryProjects,
  skillGroups,
} from "./data/projects";

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Nav() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到首頁">
        <span className="brand-mark">KH</span>
        <span>Portfolio</span>
      </a>
      <nav className="nav-links" aria-label="主要導覽">
        <a href="#projects">作品</a>
        <a href="#skills">能力</a>
        <a href="#contact">聯絡</a>
      </nav>
    </header>
  );
}

function HeroPanel() {
  const rows = [
    ["Focus", "AI Apps / Full-stack Systems"],
    ["Main Case", "Surgery Scheduling"],
    ["Stack", "React / FastAPI / Spring Boot"],
    ["Mode", "Static GitHub Pages"],
  ];

  return (
    <aside className="hero-panel" aria-label="能力摘要">
      <div className="panel-top">
        <span className="status-dot" />
        <span>Profile Snapshot</span>
      </div>
      <div className="panel-grid">
        {rows.map(([label, value]) => (
          <div className="panel-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}

function ImageFrame({ image, compact = false }) {
  return (
    <figure className={compact ? "image-frame compact" : "image-frame"}>
      <div className="window-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <img src={image.src} alt={image.title} loading="lazy" />
      {image.caption ? (
        <figcaption>
          <strong>{image.title}</strong>
          <span>{image.caption}</span>
        </figcaption>
      ) : null}
    </figure>
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

function FeaturedCard() {
  return (
    <article className="featured-card">
      <div className="featured-copy">
        <div className="card-meta">
          <span>01</span>
          <strong>{featuredProject.eyebrow}</strong>
        </div>
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
          <a className="button ghost" href="#case-study">
            查看設計重點
          </a>
        </div>
      </div>
      <ImageFrame image={{ src: featuredProject.cover, title: "首頁甘特圖" }} />
    </article>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="card-meta">
        <span>0{index + 2}</span>
        <strong>{project.metric}</strong>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="mini-preview">
        <ImageFrame image={{ src: project.cover, title: project.title }} compact />
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
        {project.links.demo ? (
          <a className="button ghost" href={project.links.demo}>
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>以一個完整系統作為主體，兩個 AI 專案補足技術深度。</h2>
      </div>
      <FeaturedCard />
      <div className="project-grid">
        {secondaryProjects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy() {
  const notes = [
    "把演算法輸出接回實際排程操作流程，而不是只停留在離線實驗。",
    "用可視化甘特圖呈現排程結果，讓非技術使用者能直接檢查與調整。",
    "保留手動排程、固定房間與管理資料等實務需求，讓系統更接近真實場景。",
  ];

  return (
    <section id="case-study" className="section case-section">
      <div className="section-heading">
        <p className="eyebrow">Case Study Preview</p>
        <h2>主打作品會用「問題、解法、工程取捨」來說明。</h2>
      </div>
      <div className="case-grid">
        {notes.map((note, index) => (
          <div className="case-note" key={note}>
            <span>0{index + 1}</span>
            <p>{note}</p>
          </div>
        ))}
      </div>
      <div className="detail-stack">
        {projectDetails.map((project) => (
          <article className="detail-section" key={project.id}>
            <div className="detail-heading">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="screenshot-grid">
              {project.images.map((image) => (
                <ImageFrame
                  image={image}
                  key={image.title}
                  compact={!image.featured}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">Technical Range</p>
        <h2>技能區先用能力分類呈現，避免變成一串沒有脈絡的工具列表。</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <p className="eyebrow">Next Step</p>
        <h2>正在整理成求職用作品集。</h2>
        <p>
          目前是視覺初版。後續可替換真實截圖、補上專案成果、履歷連結與聯絡資訊。
        </p>
      </div>
      <a className="button primary" href="https://github.com/HaDog-hub">
        GitHub Profile
      </a>
    </section>
  );
}

export default function App() {
  return (
    <div id="top" className="app">
      <Nav />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI Application / Full-stack Systems</p>
            <h1>把演算法、RAG 與強化學習做成可操作的工程系統。</h1>
            <p>
              求職導向作品集，主打智能手術排程系統，並展示 RAG 知識庫與遊戲強化學習專案。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                查看作品
              </a>
              <a className="button secondary" href="https://github.com/HaDog-hub">
                GitHub
              </a>
            </div>
          </div>
          <HeroPanel />
        </section>
        <Projects />
        <CaseStudy />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
