const HomeDescriptionArray = new Array(
  new Array("Welcome to my website! It's a pleasure to meet you! ")
);
const ListSkills = [
  { skillName: "Engineering (Nuclear/Electrical)", Exp: "" },
  { skillName: "Project Management", Exp: "" },
  { skillName: "Unity Game Engine", Exp: "" },
  { skillName: "C#", Exp: "" },
  { skillName: "HTML", Exp: "" },
  { skillName: "Technical Writing", Exp:""},
];

setListSkills(ListSkills, ".skills__container");
const qualificationsData = [
  {
    title: "Game Development Bootcamp",
    subtitle: "Circuit Stream",
    dates: "2024",
    index: 0,
  },
  {
    title: "Lead Engineer",
    subtitle: "Naval Reactors",
    dates: "2020-2023",
    index: 1,
  },
  {
    title: "Engineer",
    subtitle: "Naval Reactors",
    dates: "2018-2020",
    index: 1,
  },
  {
    title: "BS in Nuclear Engineering, Minors in Mathematics Applications and Military Studies",
    subtitle: "Penn State University",
    dates: "2014 - 2018",
    index: 0,
  },
];
setQualData(qualificationsData, ".qualification__education");

const PorfolioImgLink = "assets/img/Test/";
const portfolioItems = [
  {
    src: PorfolioImgLink + "TestScreensho.jpg",
    title: "Save the Galaxy!",
    description:
      "One of the first complete demos that I completed.  It's inspired by Asteroids and Galaga.  <br>All of the art is self-made and was a labor of love.  <br>I hope to continue updating to include rogue-like elements similar to Slay the Spire, custom music, and higher difficulties",
    link: "https://github.com/amalencia",
    playLink: "https://amalencia.itch.io",
  },
  {
    src: PorfolioImgLink + "TestScreensho.jpg",
    title: "Portal Clone",
    description:
      "In a team of four members, we worked together on a group projecet to develop a 3D Puzzle Platformer <br>The experience introduced me and got me experienced with Github. <br>Attached is my portion of the project, which is a Portal Clone.<br>This clone was a labor of love where I became experienced with shaders and cameras within Unity.",
    link: "https://github.com/amalencia",
  },
];

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
function setListSkills(skillDataArray, targetContainer) {
  skillDataArray.forEach((skillData) => {
    const html = `
        <div class = "skill-article-container">
          <article>
            <i class="uil uil-check-circle skills__icon"></i>
            <div>
            <h3 class="skills__name">${skillData.skillName}</h3>
              <p class="skills__number">${skillData.Exp}</p>
            </div>
          </article>
        </div>
        `;

    // Append the HTML content to the target container
    document.querySelector(targetContainer).innerHTML += html;
  });
}
function setSkillDataPercentage(skillDataArray, targetContainer) {
  // Iterate over the skill data array
  skillDataArray.forEach((skillData) => {
    const modifiedSkillName = skillData.skillName
      .replace(/ /g, "_")
      .replace("#", "_")
      .toLowerCase();
    // Create HTML content for skill data
    const html = `
          <div class="skills__data">
              <div class="skills__titles">
                  <h3 class="skills__name">${skillData.skillName}</h3>
                  <span class="skills__number">${skillData.skillNumber}%</span>
              </div>
              <div class="skills__bar">
                  <span class="skills__percentage skills__${modifiedSkillName}"></span>
              </div>
          </div>
      `;

    // Append the HTML content to the target container
    document.querySelector(targetContainer).innerHTML += html;

    // Calculate width based on skill number
    const width = `${skillData.skillNumber}%`;

    // Set width for the skills bar
    document.querySelector(
      `.skills__percentage.skills__${modifiedSkillName}`
    ).style.width = width;
  });
}

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  console.log(tab);
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabcontent) => {
      tabcontent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

function setQualificationData(qualificationData, targetContainer) {
  for (let i = 0; i < qualificationData.length; i++) {
    const content = `
    <div class="qualification__data">
      <div>
        <h3 class="qualification__title">${qualificationData[i].title}</h3>
        <span class="qualification__subtitle">${qualificationData[i].subtitle}</span>
        <div class="qualification__calendar">
          <i class="uil uil-calendar-alt"></i>
          ${qualificationData[i].dates}
        </div>
      </div>
      <div>
        <span class="qualification__rounder"></span>
        <span class="qualification__line"></span>
      </div>
    </div>
    `;
    const content1 = `
    <div class="qualification__data">
      <div></div>
      <div>
        <span class="qualification__rounder"></span>
        <span class="qualification__line"></span>
      </div>
      <div>
        <h3 class="qualification__title">${qualificationData[i].title}</h3>
        <span class="qualification__subtitle">${qualificationData[i].subtitle}</span>
        <div class="qualification__calendar">
          <i class="uil uil-calendar-alt"></i>
          ${qualificationData[i].dates}
        </div>
      </div>
    `;
    document.querySelector(targetContainer).innerHTML +=
      i % 2 === 0 ? content : content1;
  }
}
function setQualData(qualificationData, targetContainer) {
  for (let i = 0; i < qualificationData.length; i++) {
    const content = `
    <div class="qualification__data">
      <div>
        <h3 class="qualification__title">${qualificationData[i].title}</h3>
        <span class="qualification__subtitle">${qualificationData[i].subtitle}</span>
        <div class="qualification__calendar">
          <i class="uil uil-calendar-alt"></i>
          ${qualificationData[i].dates}
        </div>
      </div>
      <div>
        <span class="qualification__rounder"></span>
        <span class="qualification__line"></span>
      </div>
    </div>
    `;
    const content1 = `
    <div class="qualification__data">
      <div></div>
      <div>
        <span class="qualification__rounder"></span>
        <span class="qualification__line"></span>
      </div>
      <div>
        <h3 class="qualification__title">${qualificationData[i].title}</h3>
        <span class="qualification__subtitle">${qualificationData[i].subtitle}</span>
        <div class="qualification__calendar">
          <i class="uil uil-calendar-alt"></i>
          ${qualificationData[i].dates}
        </div>
      </div>
    `;
    document.querySelector(targetContainer).innerHTML +=
      qualificationData[i].index % 2 === 0 ? content : content1;
  }
}

/*==================== PORTFOLIO SWIPER  ====================*/
function initSwiper() {
  let swiper = new Swiper(".portfolio__container", {
    watchOverflow: true,
    loop: false,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    // Responsive breakpoints
    autoplay: {
      delay: 1000, 
      disableOnInteraction: true, 
    },
    breakpoints: {
      // When window width is >= 768px
      568: {
        slidesPerView: 2, // Display 2 slides per view
        centeredSlides: false,

        slidesPerGroup: 2,
        spaceBetween: 15,
      },
    },
  });
}
/*==================== PORTFOLIO Card  ====================*/

const container = document.querySelector(".swiper-wrapper");
portfolioItems.forEach((item) => {
  const playLink = item.playLink
    ? `<a href="${item.playLink}" target="_blank" class="button button--flex button--small portfolio__button">
          Play&nbsp
          <i class="uil uil-play button__icon"></i>
        </a>`
    : "";
  const Link = item.link
    ? `<a href="${item.link}" target="_blank" class="button button--flex button--small portfolio__buttons portfolio__button">
                  Doc&nbsp
                  <i class="uil uil-arrow-right button__icon"></i>
              </a>`
    : "";
  const html = `
      <div class="portfolio__content  grid swiper-slide">

         <div class ="portfolio__imgcontainer"> <img src="${item.src}" alt="" class="portfolio__img" loading="lazy"> </div>
          <div class="portfolio__data">
              <h3 class="portfolio__title">${item.title}</h3>
              <p class="portfolio__description">${item.description}</p>
              ${Link}
              ${playLink}
          </div>
      </div>
  `;

  container.innerHTML += html;
});
initSwiper();

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 100) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");

const logoImg = document.getElementById("logo-img");

const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const logoLightTheme = "assets/img/signature.png";
const logoDarkTheme = "assets/img/signature_darktheme.png";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const selectedLogo = localStorage.getItem("selected-logo");

if (!selectedTheme || selectedTheme === "dark") {
  document.body.classList.add(darkTheme);
  themeButton.classList.remove("uil-moon");
  themeButton.classList.add(iconTheme);
  logoImg.setAttribute("src", "assets/img/signature_darktheme.png");
  
} else {
  document.body.classList.remove(darkTheme);
  themeButton.classList.add("uil-moon");
  themeButton.classList.remove(iconTheme);
  logoImg.setAttribute("src", "assets/img/signature.png");
}
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
const getCurrentLogoImg = () =>
  logoImg.getAttribute("src") ? "assets/img/signature_darktheme.png" : "assets/img/signature.png";

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  themeButton.classList.toggle("uil-moon");
  
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  
  
    if(themeButton.classList.contains(iconTheme)) {
	  logoImg.setAttribute("src","assets/img/signature_darktheme.png");
  } else {
	  logoImg.setAttribute("src","assets/img/signature.png");
  }
  
});
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  if (nameValue === "") {
    setError(name, "Name is required");
    return;
  } else {
    setSuccess(name);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
    return;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    return;
  } else {
    setSuccess(email);
  }
  if (messageValue === "") {
    setError(message, "Message is required");
    return;
  } else {
    setSuccess(message);
  }

  const serviceID = "service_3o5g3jd";
  const templateID = "contact_form";

  emailjs.sendForm(serviceID, templateID, "form").then(
    () => {
      submit.innerText = "Sent!";
	  name.value = "";
	  email.value = "";
	  message.value = "Your message has been sent!  I will respond to you as soon as I can!";
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.add("paddingError");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
  inputControl.classList.remove("paddingError");
};
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

var randomNumber = Math.floor(Math.random() * HomeDescriptionArray.length);
var aText = HomeDescriptionArray[randomNumber];
var iSpeed = 40; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents +
    aText[iIndex].substring(0, iTextPos) +
    '<span style="color: var(--first-color);">_';
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();
