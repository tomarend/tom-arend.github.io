export const SITE = {
  website: "https://tomarend.github.io/", // your deployed domain (include https://)
  author: "Tom Arend",
  profile: "https://tomarend.github.io/",
  desc: "My personal website where I share research papers and blog about topics that I find interesting.",
  title: "Tom Arend",
  ogImage: "tomarend-og.jpg", // put this image in /public (or keep the default if you prefer)
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    // If your content repo is different, update this to match:
    url: "https://github.com/tomarend/tomarend.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code
  timezone: "Europe/Paris", // your local timezone (IANA format)
} as const;
