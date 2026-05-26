import hollowKnightTrainingCurve from "../assets/screenshots/hollow-knight/training_curve.png";
import ragChatPage from "../assets/screenshots/rag/chat-page.png";
import ragSearchPage from "../assets/screenshots/rag/search-page.png";
import ragUpdatePage from "../assets/screenshots/rag/update-page.png";
import surgeryORManagement from "../assets/screenshots/surgery/OR-management.png";
import surgeryAccountManagement from "../assets/screenshots/surgery/account-management.png";
import surgeryAfterAlgorithm from "../assets/screenshots/surgery/after-algorithm.png";
import surgeryBeforeAlgorithm from "../assets/screenshots/surgery/before-algorithm.png";
import surgeryDepartmentManagement from "../assets/screenshots/surgery/department-management.png";
import surgeryHomePage from "../assets/screenshots/surgery/home-page.png";
import surgeryManagementAfterAlgorithm from "../assets/screenshots/surgery/surgery-management-after-algorithm.png";
import surgeryManagementBeforeAlgorithm from "../assets/screenshots/surgery/surgery-management-before-algorithm.png";

export const featuredProject = {
  eyebrow: "Featured Case Study",
  title: "智能手術排程決策支援系統",
  summary:
    "整合拖曳式甘特圖、角色權限與 Simulated Annealing 排程演算法的醫療排程管理系統。",
  description:
    "以醫院手術室排程為情境，將資料管理、手動調整與自動最佳化流程整合在同一個操作介面中。",
  tags: ["React", "Vite", "Spring Boot", "MySQL", "SA + SGDR"],
  points: ["拖曳式甘特圖排程", "演算法前後對比", "角色權限與管理介面"],
  cover: surgeryHomePage,
  links: {
    github: "https://github.com/1535414904/Surgery-Scheduling-System",
  },
};

export const secondaryProjects = [
  {
    id: "rag",
    title: "RAG 知識庫問答系統",
    summary:
      "多用戶文件問答系統，支援 PDF / DOCX 上傳、混合檢索與串流回答。",
    tags: ["React", "FastAPI", "RAG", "ChromaDB", "OpenAI"],
    cover: ragChatPage,
    links: {
      github: "https://github.com/HaDog-hub/RAG_Knowledge_BASE",
    },
  },
  {
    id: "hollow-knight",
    title: "Hollow Knight AI",
    summary:
      "以 PPO 訓練純視覺 Boss 戰 Agent，透過 C# Mod 與 Python RL 環境串接。",
    tags: ["PPO", "PyTorch", "Gymnasium", "C# Mod", "TCP"],
    cover: hollowKnightTrainingCurve,
    links: {
      github: "https://github.com/HaDog-hub/PPO-HollowKnight",
    },
  },
];

export const projectDetails = [
  {
    id: "surgery",
    eyebrow: "Surgery Scheduling System",
    title: "智能手術排程決策支援系統",
    description:
      "主打完整系統能力：從手術資料管理、權限角色，到拖曳式甘特圖與排程演算法整合。",
    highlights: [
      {
        title: "演算法整合",
        description:
          "將 SA + SGDR 排程結果接回後端流程，輸出可被前端檢視與操作的排程資料。",
      },
      {
        title: "視覺化排程",
        description:
          "用甘特圖呈現手術房、時間與手術項目，讓使用者能比較排程前後差異。",
      },
      {
        title: "實務管理流程",
        description:
          "保留帳號、科別、手術房與手術資料管理，讓系統不只是演算法 demo。",
      },
    ],
    images: [
      {
        title: "首頁甘特圖",
        caption: "以甘特圖呈現手術房排程狀態，讓使用者能快速掌握當日安排。",
        src: surgeryHomePage,
        featured: true,
      },
      {
        title: "排程管理 - 執行前",
        caption: "演算法執行前的排程狀態，用於對比最佳化前後差異。",
        src: surgeryBeforeAlgorithm,
      },
      {
        title: "排程管理 - 執行後",
        caption: "演算法執行後重新分配結果，凸顯自動排程流程。",
        src: surgeryAfterAlgorithm,
      },
      {
        title: "手術管理 - 執行前",
        caption: "手術管理頁面的演算法執行前狀態。",
        src: surgeryManagementBeforeAlgorithm,
      },
      {
        title: "手術管理 - 執行後",
        caption: "手術管理頁面的演算法執行後狀態。",
        src: surgeryManagementAfterAlgorithm,
      },
      {
        title: "帳號管理",
        caption: "系統管理員可管理使用者帳號與角色權限。",
        src: surgeryAccountManagement,
      },
      {
        title: "科別管理",
        caption: "維護醫院科別資料，支援排程資料的基礎管理。",
        src: surgeryDepartmentManagement,
      },
      {
        title: "手術房管理",
        caption: "管理手術房與相關設定，對應排程資源配置。",
        src: surgeryORManagement,
      },
    ],
  },
  {
    id: "rag",
    eyebrow: "RAG Knowledge BASE",
    title: "RAG 知識庫問答系統",
    description:
      "展示文件上傳、知識庫檢索與聊天回答流程，重點放在 RAG 應用的完整互動。",
    images: [
      {
        title: "聊天室主頁面",
        caption: "有實際聊天內容的問答畫面，呈現知識庫回答體驗。",
        src: ragChatPage,
        featured: true,
      },
      {
        title: "上傳資料功能",
        caption: "使用者可上傳文件，建立可查詢的個人知識庫。",
        src: ragUpdatePage,
      },
      {
        title: "搜尋功能",
        caption: "提供搜尋入口，展示系統的 retrieval 與文件查找能力。",
        src: ragSearchPage,
      },
    ],
  },
  {
    id: "hollow-knight",
    eyebrow: "PPO Hollow Knight",
    title: "Hollow Knight AI",
    description:
      "用訓練曲線呈現 PPO Agent 的學習過程，補足強化學習專案的成果證據。",
    images: [
      {
        title: "訓練曲線圖",
        caption: "追蹤訓練過程與 reward / damage 表現，用於說明模型學習進展。",
        src: hollowKnightTrainingCurve,
        featured: true,
      },
    ],
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
