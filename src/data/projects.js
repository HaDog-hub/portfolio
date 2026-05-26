export const featuredProject = {
  eyebrow: "Featured Case Study",
  title: "智能手術排程決策支援系統",
  summary:
    "整合拖曳式甘特圖、角色權限與 Simulated Annealing 排程演算法的醫療排程管理系統。",
  description:
    "以醫院手術室排程為情境，將資料管理、手動調整與自動最佳化流程整合在同一個操作介面中。",
  tags: ["React", "Vite", "Spring Boot", "MySQL", "SA + SGDR"],
  points: ["拖曳式甘特圖排程", "演算法前後對比", "角色權限與管理介面"],
  links: {
    github: "https://github.com/1535414904/Surgery-Scheduling-System",
  },
};

export const secondaryProjects = [
  {
    title: "RAG 知識庫問答系統",
    summary:
      "多用戶文件問答系統，支援 PDF / DOCX 上傳、混合檢索與串流回答。",
    tags: ["React", "FastAPI", "RAG", "ChromaDB", "OpenAI"],
    metric: "Hybrid Search",
    links: {
      github: "https://github.com/HaDog-hub/RAG_Knowledge_BASE",
      demo: "https://ragknowledgebase-production.up.railway.app",
    },
  },
  {
    title: "Hollow Knight AI",
    summary:
      "以 PPO 訓練純視覺 Boss 戰 Agent，透過 C# Mod 與 Python RL 環境串接。",
    tags: ["PPO", "PyTorch", "Gymnasium", "C# Mod", "TCP"],
    metric: "1.47M steps",
    links: {
      github: "https://github.com/HaDog-hub/PPO-HollowKnight",
    },
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Vite", "SPA", "Responsive UI", "Data-heavy UI"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "FastAPI", "REST API", "JWT", "SQL / ORM"],
  },
  {
    title: "AI Engineering",
    items: ["RAG", "Embeddings", "Hybrid Retrieval", "LLM Streaming"],
  },
  {
    title: "Algorithms",
    items: ["Simulated Annealing", "PPO", "Reward Design", "Experiment Logs"],
  },
];
