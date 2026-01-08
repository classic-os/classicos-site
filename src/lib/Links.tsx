export const LINKS = {
    app: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.classicos.org",
    docs: process.env.NEXT_PUBLIC_DOCS_URL ?? "https://docs.classicos.org",
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/classic-os",
    etc: process.env.NEXT_PUBLIC_ETC_URL ?? "https://ethereumclassic.com",
} as const;
