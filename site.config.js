const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Sejin",
    image: "/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "Do clean, scalable code.",
    email: "dev.sejinhan@gmail.com",
    linkedin: "", // LinkedIn 사용자명 추가 (또는 빈 문자열 "")
    github: "sejin-kr",
    instagram: "",
  },
  projects: [
    {
      name: `sejinhan-log`,
      href: "https://github.com/sejin-kr/sejin-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sejinhan-log",
    description: "welcome to sejinhan-log!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://sejin-log-git-main-sejins-projects-b46089e4.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: "238b9e174dee80878c7ef0bfceaafd2c",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true, // Google Analytics 활성화
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true, // Google Search Console 활성화
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true, // 네이버 서치어드바이저 활성화
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
