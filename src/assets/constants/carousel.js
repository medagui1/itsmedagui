const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconFolderPath = prefersDarkMode
  ? "../../logos/light/"
  : "../../logos/dark/";

// import git from iconFolderPath + 'git.svg';
// import redis from iconFolderPath + 'redis.svg';
const importIcon = async (iconName) => {
  const module = await import(iconFolderPath + iconName + ".svg");
  return module.default; // Assuming the SVG is the default export
};

const html = await importIcon("html");
const css = await importIcon("css");
const javascript = await importIcon("javascript");
const python = await importIcon("python");
const reactjs = await importIcon("reactjs");
const tailwindcss = await importIcon("tailwindcss");
const django = await importIcon("django");
const postgresql = await importIcon("postgresql");
const redis = await importIcon("redis");
const git = await importIcon("git");


const originalCarousel = [html, css, javascript, python, reactjs, tailwindcss, django, postgresql, redis, git];

// Duplicating the array
const carousel = [...originalCarousel, ...originalCarousel];

export default carousel;
