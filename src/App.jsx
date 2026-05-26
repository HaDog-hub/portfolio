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
        <span className="brand-mark">HaDog</span>
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
        {project.metric ? <strong>{project.metric}</strong> : null}
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

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">Selected Work</p>
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
            <p className="hero-name">HaDog</p>
            <p className="hero-role">AI Application / Full-stack Systems / Optimization</p>
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
            <div className="hero-tags" aria-label="核心技術">
              {["React", "Spring Boot", "FastAPI", "RAG", "PPO", "Simulated Annealing"].map(
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
        <Projects />
        <CaseStudy />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
