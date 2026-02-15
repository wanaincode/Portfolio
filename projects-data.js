// projects-data.js
// #comment: Data model for project cards. Flexible & extensible.

window.PROJECTS = [
  {
    title: "アーバンデータチャレンジ2025【学生奨励賞】",
    desc: "災害時に外国人観光客が避難や情報共有で困難を抱える課題に対し、GISやGTFSなどのオープンデータを活用し、ネットワークが遮断された状況でもBluetooth通信で近くの人と情報を共有・連携できる多言語対応アプリを開発する。",
    media: { type: "image", src: "images/udc2025.png", alt: "Resilient Mesh Nav アプリ画面" },
    tags: ["Flutter", "Bluetooth Mesh", "GIS", "Disaster Prevention", "Multi-language", "Offline-first"],
    github: "https://github.com/SolaIntegral/udc2025",
    demo: ""
  },
  {
    title: "情報処理学会プロジェクト【学生奨励賞】",
    desc: "冷蔵庫内食材の自動判別システム。GroundingDINO / SAM / CLIP を統合し、UI を構築。",
    media: { type: "youtube", id: "WM_rVHsI6sQ" }, 
    tags: ["Computer Vision", "DINO", "SAM"],
    github: "https://github.com/wanaincode/UEC_kobo2023_project?tab=readme-ov-file", 
    demo: "" 
  },
  {
    title: "Instagram 抽籤ツール",
    desc: "投稿コメントを取得しランダム抽選する Web ツール。",
    media: { type: "image", src: "images/insta-lottery.png", alt: "抽籤工具畫面" }, 
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/wanaincode/instagram_lottory",
    demo: "https://wanaincode.github.io/instagram_lottory/"
  },
  {
    title: "SIMS / EMC 研究ツール",
    desc: "マルチピーク Poisson 尤度モデルと Exchange Monte Carlo により 2D SIMS 信号を再構成。低カウント・高ノイズ環境での安定推論。",
    media: { type: "image", src: "images/sims-result.png", alt: "SIMS 再構成結果" },
    tags: ["Bayesian", "EMC", "SIMS"],
    github: "",
    demo: ""
  },
  {
    title: "Portfolio（本サイト）",
    desc: "個人ポートフォリオサイトのデザインと実装。GitHub Pages で公開。",
    media: { type: "none" }, 
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/wanaincode/Portfolio",
    demo: "https://wanaincode.github.io/Portfolio/"
  }
];