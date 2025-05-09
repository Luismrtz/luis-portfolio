const bars = document.querySelector(".bars");
const times = document.querySelector(".times");
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".navLinks");
const navvy = document.querySelector(".navvy");
const overflow = document.querySelector(".overflow");
const navbar = document.querySelector(".navbar");

function toggleBurger() {
  bars.classList.toggle("hide");
  times.classList.toggle("hide");
  navvy.classList.toggle("showNav");
  overflow.classList.toggle("overflowHidden");
}

const menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener(
    "click",
    () => (
      bars.classList.remove("hide"),
      times.classList.add("hide"),
      navvy.classList.remove("showNav"),
      overflow.classList.remove("overflowHidden")
    )
  );
});

burger.addEventListener("click", toggleBurger);

const projects = [
  {
    title: "Pinblog",
    image: "images/pinblog-portfolio.PNG",
    website: "https://my-interests-blogs.web.app/",
    github: "https://github.com/Luismrtz/vue-interests-blog",
    date: "2021-08-24",
  },
  {
    title: "Material UI Proj",
    image: "images/mat-proj.PNG",
    website: "https://blissful-saha-fa1bb3.netlify.app/",
    github: "https://github.com/Luismrtz/material-UI-proj-1",
    date: "2021-05-30",
  },
  {
    title: "Explore TS",
    image: "images/ExploreWebsite.PNG",
    website: "https://amazing-mccarthy-b2b1d8.netlify.app/",
    github: "https://github.com/Luismrtz/Zenitram-TS",
    date: "2021-05-30",
  },
  {
    title: "Mamas Recipes",
    image: "images/lm-recipes.PNG",
    website: "",
    github: "https://github.com/Luismrtz/mamas-recipes",
    date: "2021-01-24",
  },
  {
    title: "Webstore",
    image: "images/symbols.PNG",
    website: "",
    github: "https://github.com/Luismrtz/webstore",
    date: "2021-04-20",
  },
  {
    title: "Auth app",
    image: "images/auth.PNG",
    website: "",
    github: "https://github.com/Luismrtz/auth-app",
    date: "2021-02-04",
  },
  {
    title: "Mock Clinic",
    image: "images/mock-clinic-projects.PNG",
    website: "",
    github: "https://github.com/Luismrtz/mock-clinic",
    date: "2024-12-05",
  },
];

// Helpers
const isOld = (date) => {
  const projectDate = new Date(date);
  const dateLimit = new Date("2023-01-01");
  return projectDate < dateLimit;
};

// Sort by date
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// date filter
const newProjects = projects.filter((project) => !isOld(project.date));
const oldProjects = projects.filter((project) => isOld(project.date));

function cardList(projects, id) {
  const container = document.getElementById(id);
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";

    const hasWebsite = !!project.website;

    // format date
    const formateDate = new Date(project.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    card.innerHTML = `
            <div class="image-wrapper">
              <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="content">
              <h3>${project.title}</h3>
              <div class="date sm">
                  <img src="images/svg/calendar.svg" alt="Calendar Icon" class="calendar-icon"> 
                  ${formateDate}
              </div>
              <div class="button-row">
                ${
                  hasWebsite
                    ? `<a href="${project.website}" class="button-visible" target="_blank">Website</a>`
                    : ""
                }
                <a href="${
                  project.github
                }" class="button-visible" target="_blank">Github</a>
              </div>
            </div>
        `;

    container.appendChild(card);
  });
}

cardList(newProjects, "new-projects");
cardList(oldProjects, "old-projects");
