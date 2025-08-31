
const PROJECTS = [
  {
    "name": "Metro Project",
    "desc": "Flutter app for Cairo Metro info/routes (DEPI).",
    "repo": "https://github.com/Amrwael10/metro_project",
    "image": "imges/metro.png",
    "tags": [
      "Flutter",
      "Mobile"
    ]
  },
  {
    "name": "Expense Tracker",
    "desc": "Track daily expenses with charts & categories.",
    "repo": "https://github.com/Amrwael10/Expense-Tracker-",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    "tags": [
      "Flutter",
      "Finance"
    ]
  },
  {
    "name": "Weather App (Web)",
    "desc": "Simple JS weather app: type a country and see weather.",
    "repo": "https://github.com/Amrwael10/Amr-WebApp",
    "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop&crop=center",
    "tags": [
      "JavaScript",
      "Web"
    ]
  },
  {
    "name": "Recipe Web Project",
    "desc": "CSS-based recipe website layout (practice project).",
    "repo": "https://github.com/Amrwael10/Recipe-web-project",
    "image": "imges/Rectangle 2.png",
    "tags": [
      "HTML",
      "CSS"
    ]
  },
  {
    "name": "Quiz App (Flutter)",
    "desc": "Mobile quiz application built with Flutter.",
    "repo": "https://github.com/Amrwael10/Quiz-App-Flutter",
    "image": "imges/quiz-logo.png",
    "tags": [
      "Flutter",
      "Mobile"
    ]
  },
  
];

function el(tag, attrs={}, ...children){
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=> {
    if(k==='class') e.className=v; else if(k==='href') e.setAttribute('href', v); else if(k==='aria') Object.entries(v).forEach(([a,b])=>e.setAttribute(a,b)); else e[k]=v;
  });
  children.flat().forEach(c=> e.append(c?.nodeType ? c : document.createTextNode(c)));
  return e;
}

function mountProjects(){
  const grid = document.querySelector('#projects-grid');
  grid.innerHTML = '';
  const unique = [];
  PROJECTS.forEach(p => {
    const key = p.repo.toLowerCase();
    if(unique.includes(key)) return; // avoid duplicates
    unique.push(key);
    const card = el('div', {class:'card'},
      el('div', {class:'project-image'},
        el('img', {src:p.image, alt:p.name, class:'project-img'})
      ),
      el('h3',{}, p.name),
      el('p',{class:'muted'}, p.desc),
      el('div',{class:'tags'}, p.tags.map(t=> el('span',{class:'tag'}, t))),
      el('div',{class:'links'},
        el('a',{class:'link', href:p.repo, target:'_blank', rel:'noopener noreferrer'}, 'View Repo')
      )
    );
    grid.append(card);
  });
}
document.addEventListener('DOMContentLoaded', mountProjects);

// Scroll-triggered fade-in animations
function handleScrollAnimations() {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.8) {
      section.classList.add('fade-in');
      
      // Special handling for skill progress bars
      if (section.id === 'about') {
        const progressBars = section.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          // Get the target width from inline style
          const targetWidth = bar.style.width;
          // Set the CSS custom property for the animation
          bar.style.setProperty('--target-width', targetWidth);
          // Don't reset width here - let CSS handle it
        });
      }
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Trigger on initial load
window.addEventListener('load', handleScrollAnimations);
