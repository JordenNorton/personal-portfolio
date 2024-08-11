import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Jorden Norton",
  DESCRIPTION: "Welcome to my personal site, A blend of CV, creative projects, and insightful blog posts.",
  AUTHOR: "Jorden Norton",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "jordennortondev@gmail.com",
    HREF: "mailto:jordennortondev@gmail.com",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "@Jorden Norton",
    HREF: "https://www.linkedin.com/in/jorden-norton-086039161/",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "@JordenNorton",
    HREF: "https://github.com/JordenNorton"
  },
]

