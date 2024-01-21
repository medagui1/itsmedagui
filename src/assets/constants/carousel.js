const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconFolderPath = prefersDarkMode
  ? "../../logos/dark/"
  : "../../logos/light/";

/*************** To be fixed later. For now I will use something else. ******************/

// const importIcon = async (iconName) => {
//   const module = await import(iconFolderPath + iconName + ".svg" /* @vite-ignore */ );
//   return module.default; 
// };

// const html = await importIcon("html");
// const css = await importIcon("css");
// const javascript = await importIcon("javascript");
// const python = await importIcon("python");
// const reactjs = await importIcon("reactjs");
// const tailwindcss = await importIcon("tailwindcss");
// const django = await importIcon("django");
// const postgresql = await importIcon("postgresql");
// const redis = await importIcon("redis");
// const git = await importIcon("git");


// const originalCarousel = [html, css, javascript, python, reactjs, tailwindcss, django, postgresql, redis, git];

import html_light from '../../logos/light/html.svg'
import html_dark from '../../logos/dark/html.svg'
import css_light from '../../logos/light/css.svg'
import css_dark from '../../logos/dark/css.svg'
import javascript_light from '../../logos/light/javascript.svg'
import javascript_dark from '../../logos/dark/javascript.svg'
import python_light from '../../logos/light/python.svg'
import python_dark from '../../logos/dark/python.svg'
import reactjs_light from '../../logos/light/reactjs.svg'
import reactjs_dark from '../../logos/dark/reactjs.svg'
import tailwindcss_light from '../../logos/light/tailwindcss.svg'
import tailwindcss_dark from '../../logos/dark/tailwindcss.svg'
import django_light from '../../logos/light/django.svg'
import django_dark from '../../logos/dark/django.svg'
import postgresql_light from '../../logos/light/postgresql.svg'
import postgresql_dark from '../../logos/dark/postgresql.svg'
import redis_light from '../../logos/light/redis.svg'
import redis_dark from '../../logos/dark/redis.svg'
import git_light from '../../logos/light/git.svg'
import git_dark from '../../logos/dark/git.svg'

let originalCarousel = []

if (prefersDarkMode) {
    
    originalCarousel = [
        html_dark,
        css_dark,
        javascript_dark,
        python_dark,
        reactjs_dark,
        tailwindcss_dark,
        django_dark,
        postgresql_dark,
        redis_dark,
        git_dark
      ]
}
else {
    originalCarousel = [
        html_light,
        css_light,
        javascript_light,
        python_light,
        reactjs_light,
        tailwindcss_light,
        django_light,
        postgresql_light,
        redis_light,
        git_light
      ]
}

// Duplicating the array
const carousel = [...originalCarousel, ...originalCarousel];

export default carousel;
