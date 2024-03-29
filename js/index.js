//////////////////////DARKMODE///////////////////////

const background = document.querySelector(".body");
const button = document.querySelectorAll(".toggle");
const a = document.getElementsByTagName("a");
const p = document.getElementsByTagName("p");
const array_a = Array.from(a);
const array_p = Array.from(p);
const projectname = document.querySelectorAll(".project");
const logo = document.querySelector("#logoname");
const ball = document.querySelectorAll(".ball");
const intro = document.querySelectorAll(".intro");
const skills = document.querySelectorAll(".projectimg");
const contactme = document.querySelector(".contact");
const contacttilt = document.querySelector("#contactme");
const header = document.querySelector(".header");
const hiddenmenu = document.querySelector(".hidden-menu");
const profile = document.querySelector(".profile");
const stars = document.querySelector(".stars");

const glass = document.querySelector(".glass");

let darkmode = localStorage.getItem("mode");

// VANTA.CLOUDS({
//   el: ".body",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   speed: 1
// })

let darkvanta = VANTA.CLOUDS({
  el: ".body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  skyColor: 0xa3f,
  cloudColor: 0x9ebdee,
  sunColor: 0xffffff,
  sunGlareColor: 0x0,
  sunlightColor: 0x0,
  speed: 1,
});

let lightvanta = VANTA.CLOUDS({
  el: ".body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  speed: 1,
});

const apply_light_vanta = () => {
  lightvanta.setOptions({
  skyColor: 0x68b8d7,
  cloudColor: 0xadc1de,
  sunColor: 0xff9919,
  sunGlareColor: 0xff6633,
  sunlightColor: 0xff9933
  })
};

const apply_dark_vanta = () => {
  lightvanta.setOptions({
    skyColor: 0xa3f,
    cloudColor: 0x9ebdee,
    sunColor: 0xffffff,
    sunGlareColor: 0x0,
    sunlightColor: 0x0
  })
};

const apply_mode = () => {
  darkmode = localStorage.getItem("mode");
  if (darkmode === "light") {
    apply_light_vanta();
    light();
  } else {
    apply_dark_vanta();
    dark();
  }
};

const dark = () => {
  const arrow = document.querySelectorAll(".fp-controlArrow");
  const navslid = document.querySelectorAll(
    " .fp-slidesNav > ul > li > a > span"
  );
  const rightnav = document.querySelectorAll(" #fp-nav > ul > li > a > span");
  glass.classList.add("darkglass");
  header.classList.add("darkglass");
  hiddenmenu.classList.add("darkglass");
  contacttilt.classList.add("darkglass");
  arrow.forEach((e) => {
    e.classList.add("darkcontact");
  });
  // background.classList.add("darkbody");
  logo.classList.add("darklogo");
  contactme.classList.add("darkcontact");
  profile.classList.add("darkprofile");
  navslid.forEach((e) => {
    e.classList.add("darknav");
  });
  rightnav.forEach((e) => {
    e.classList.add("darknav");
  });
  projectname.forEach((e) => {
    e.classList.add("darkprojectname");
  });
  intro.forEach((e) => {
    e.classList.add("darkintro");
  });

  array_a.forEach((e) => {
    e.classList.add("darktext");
  });
  array_p.forEach((e) => {
    e.classList.add("darktext");
  });
  button.forEach((e) => {
    e.classList.add("darktoggle");
  });
  ball.forEach((e) => {
    if (e) e.classList.add("right");
  });
  skills.forEach((e) => {
    if (e) e.classList.add("darkcontact");
  });
  stars.style.opacity = 0.7;
  localStorage.setItem("mode", "light");
};

const light = () => {
  profile.classList.remove("darkprofile");
  const arrow = document.querySelectorAll(".fp-controlArrow");
  const navslid = document.querySelectorAll(
    " .fp-slidesNav > ul > li > a > span"
  );
  const rightnav = document.querySelectorAll(" #fp-nav > ul > li > a > span");
  header.classList.remove("darkglass");
  rightnav.forEach((e) => {
    e.classList.remove("darknav");
  });
  arrow.forEach((e) => {
    e.classList.remove("darkcontact");
  });
  glass.classList.remove("darkglass");
  navslid.forEach((e) => {
    e.classList.remove("darknav");
  });
  hiddenmenu.classList.remove("darkglass");
  projectname.forEach((e) => {
    e.classList.remove("darkprojectname");
  });
  intro.forEach((e) => {
    e.classList.remove("darkintro");
  });
  contacttilt.classList.remove("darkglass");
  // background.classList.remove("darkbody");

  array_a.forEach((e) => {
    e.classList.remove("darktext");
  });
  logo.classList.remove("darklogo");
  array_p.forEach((e) => {
    e.classList.remove("darktext");
  });
  button.forEach((e) => {
    e.classList.remove("darktoggle");
  });
  contactme.classList.remove("darkcontact");
  ball.forEach((e) => {
    e.classList.remove("right");
  });
  skills.forEach((e) => {
    if (e) e.classList.remove("darkcontact");
  });
  stars.style.opacity = 0;
  localStorage.setItem("mode", "dark");
};

button.forEach((e) => {
  e.addEventListener("click", () => {
    apply_mode();
  });
});

if (darkmode !== "dark") {
  apply_dark_vanta();
  dark();
} else apply_light_vanta();
/////////////////////////////////////////////////////

//////////////////Responsive   Menu////////////////

const menu_button = document.querySelector(".menu-button");
const menu = document.querySelector(".hidden-menu");
const menu_logo = document.querySelector(".menu-img");

const showmenu = () => {
  const checker = menu.dataset.checker;
  if (checker === "off") {
    menu.classList.add("not-hidden-menu");
    menu.dataset.checker = "on";
    menu_logo.src = "img/cross.png";
  } else {
    menu.classList.remove("not-hidden-menu");
    menu.dataset.checker = "off";
    menu_logo.src = "img/lmenu.svg";
  }
};

menu_button.addEventListener("click", () => {
  showmenu();
});

/////////////hide-menu if click to href//////////

const click = document.querySelectorAll(".click");

click.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.remove("not-hidden-menu");
    menu.dataset.checker = "off";
    menu_logo.src = "img/lmenu.svg";
  });
});

///////// hide menu if window big //////////

const media = window.matchMedia("(min-width: 720px)");
const mediachecker = (media) => {
  if (media.matches) {
    menu.classList.remove("not-hidden-menu");
    menu.dataset.checker = "on";
    menu_logo.src = "img/cross.png";
  } else {
    menu.dataset.checker = "off";
    menu_logo.src = "img/lmenu.svg";
  }
};
mediachecker(media);
media.addListener(mediachecker);

//////////////////////PAGE ANIMATION USING ; FULLPAGE JS///////////////////////////

const allsections = new fullpage("#fullpage", {
  menu: "#menu",
  anchors: ["Home", "Ps", "Cme"],
  autoScrolling: true,
  paddingBottom: "120px",
  navigation: true,
  animateAnchor: true,
  scrollHorizontally: true,
  controlArrows: true,
  responsiveSlides: true,
  slidesNavigation: true,
});

////////////////////////tilt Vanilla/////////////////////////////

VanillaTilt.init(document.querySelector("#contactme"), {
  max: 25,
  speed: 400,
  glare: false,
  "max-glare": 0.5,
});

/////////////////////////////////////////////////////
