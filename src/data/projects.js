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
import awardCollegeProject from "../assets/screenshots/surgery/awards/college-project.JPG";
import awardDepartmentProject from "../assets/screenshots/surgery/awards/department-project.JPG";
import awardInformationApplication from "../assets/screenshots/surgery/awards/information-application.png";
import awardLandseedHealthcare from "../assets/screenshots/surgery/awards/landseed-healthcare.png";
import awardNationalPracticalProject from "../assets/screenshots/surgery/awards/national-practical-project.jpg";

export const featuredProject = {
  eyebrow: "Featured Case Study",
  title: "智能手術排程決策支援系統",
  summary:
    "整合拖曳式甘特圖、角色權限與 Simulated Annealing 排程演算法的醫療排程管理系統。",
  description:
    "以醫院手術室排程為情境，串接 React 介面、Spring Boot API、MySQL 資料模型與外部排程演算法，讓使用者能從資料維護、拖曳調整到排程確認完成完整 workflow。",
  tags: ["React", "Vite", "Spring Boot", "MySQL", "SA + SGDR"],
  points: ["拖曳式甘特圖排程", "REST API 與 JPA 資料模型", "CSV 演算法串接與快照流程"],
  cover: surgeryHomePage,
  links: {
    github: "https://github.com/HaDog-hub/Surgery-Scheduling-System",
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
      "以 PPO 訓練 Hollow Knight Boss 戰 AI，串接 C# Mod、Python Gym 環境與視覺觀測。",
    tags: ["PPO", "Stable-Baselines3", "Gymnasium", "C# Mod", "TCP"],
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
    title: "智能手術排程決策支援系統 (團隊專案)",
    description:
      "手術排程管理系統，提供手術、醫師、科別、手術房與帳號管理，並以甘特圖呈現排程結果。負責前端介面、後端 REST API、MySQL/JPA 資料模型與系統整合，包含 CSV 匯出、演算法批次執行、排程結果回寫、拖曳調整、手術群組與首頁快照展示。",
    role: "負責角色：全端開發與系統整合",
    highlights: [
      {
        title: "Situation",
        description:
          "醫院手術排程需要同時考量手術房、科別、醫師與時間限制，人工調整耗時且難比較最佳化效果。",
      },
      {
        title: "Task",
        description:
          "建立一套可管理手術、醫師、科別、手術房與帳號資料，並能接入自動排程演算法的決策支援系統。",
      },
      {
        title: "Action",
        description:
          "整合 React 甘特圖介面、Spring Boot REST API、JPA 資料模型與 SA + SGDR 排程流程，將 DB 資料轉為 CSV 執行演算法，再解析結果回寫並呈現於排程畫面。",
      },
      {
        title: "Result",
        description:
          "完成可操作的手術排程系統，支援拖曳調整、跨房移動、手術群組與排程快照展示，並獲得多項專題競賽獎項。",
      },
    ],
    awards: [
      {
        title: "全國技專校院學生實務專題製作競賽",
        label: "2026 全國實務專題競賽",
        note: "資工通訊群 第一名",
        status: "獎狀尚未製作完成",
        fit: "contain",
        src: awardNationalPracticalProject,
      },
      {
        title: "大專校院資訊應用服務創新競賽 聯新國際智慧健康照護組",
        label: "2025\n大專校院資訊應用服務創新競賽",
        note: "聯新國際智慧健康照護組 第一名",
        src: awardLandseedHealthcare,
      },
      {
        title: "大專校院資訊應用服務創新競賽 資訊應用組六",
        label: "2025\n大專校院資訊應用服務創新競賽",
        note: "資訊應用組六 第一名",
        src: awardInformationApplication,
      },
      {
        title: "高雄科技大學 電機與資訊學院 院專題",
        label: "\n2025 高科大電資學院院專題",
        note: "特優",
        src: awardCollegeProject,
      },
      {
        title: "高雄科技大學 電通系 系專題展",
        label: "\n2025 高科大電通系系專題展",
        note: "系專題展 第二名",
        src: awardDepartmentProject,
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
    eyebrow: "RAG Knowledge Base",
    title: "RAG 知識庫問答系統 (個人作品)",
    description:
      "展示文件上傳、知識庫檢索與聊天回答流程，重點放在 RAG 應用的完整互動。系統會先檢索相關文件段落，再由後端動態組裝 prompt，要求模型依據 context 回答、資料不足時明確說明，並針對摘要與對話標題設計專用 prompt，讓回答更可靠且符合知識庫問答情境。",
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
    title: "Hollow Knight AI (個人作品)",
    description:
      "以 Stable-Baselines3 PPO 訓練 AI 操控 Hollow Knight 挑戰 Hornet Boss。系統以 C# Mod 透過 TCP JSON 傳遞玩家與 Boss 狀態，Python 端建立 Gymnasium 環境、執行鍵盤動作、擷取灰階影格並結合 Cutie 物件遮罩作為觀測。訓練過程設計 reward shaping、自動重置與 checkpoint resume，累積約 146 萬 steps，紀錄中曾擊敗 Boss，1000 筆 boss damage 平均約 55%。",
    images: [
      {
        title: "訓練曲線圖",
        caption: "追蹤訓練過程與 reward / boss damage 表現，用於說明實驗迭代與模型學習進展。",
        src: hollowKnightTrainingCurve,
        featured: true,
      },
    ],
  },
];
