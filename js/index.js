//////////////////////DARKMODE///////////////////////

const background = document.querySelector(".body");
const button = document.querySelectorAll(".toggle");
const a = document.getElementsByTagName('a');
const p = document.getElementsByTagName('p');
const array_a = Array.from(a);
const array_p = Array.from(p);
const projectname = document.querySelectorAll(".project");
const line = document.querySelectorAll(".line");
const header =  document.querySelector("#logoname");
const ball = document.querySelectorAll('.ball');
const intro = document.querySelectorAll('.intro');
const contactme = document.querySelector('.contact');

let darkmode = localStorage.getItem("mode");

const apply_mode = () => {
   
  darkmode = localStorage.getItem("mode");
  if (darkmode === "light") {
    light();
  } else {
    dark();
  }
};

 const dark = () => {
  const navslid = document.querySelectorAll(" .fp-slidesNav > ul > li > a > span");
   background.classList.add("darkbody");
   header.classList.add("darkheader");
   contactme.classList.add("darkcontact");
   navslid.forEach((e) => {e.classList.add("darknav")});
   projectname.forEach((e) => {e.classList.add("darkprojectname")});
   intro.forEach((e) => {e.classList.add("darkintro")});
   line.forEach((e) => {e.classList.add("darkline")});
   array_a.forEach((e) => {e.classList.add("darktext")});
   array_p.forEach((e) => {e.classList.add("darktext")});
   button.forEach((e) => {e.classList.add("darktoggle")});
   ball.forEach((e) => {
       if(e)
        e.classList.add("right");
});

  localStorage.setItem("mode", "light");
};

const light = () => {
  const navslid = document.querySelectorAll(" .fp-slidesNav > ul > li > a > span");
  navslid.forEach((e) => {e.classList.remove("darknav")});
  projectname.forEach((e) => {e.classList.remove("darkprojectname")});
  intro.forEach((e) => {e.classList.remove("darkintro")});
  background.classList.remove("darkbody");
  line.forEach((e) => {e.classList.remove("darkline")});
  array_a.forEach((e) => {e.classList.remove("darktext")});
  header.classList.remove("darkheader");
  array_p.forEach((e) => {e.classList.remove("darktext")});
  button.forEach((e) => {e.classList.remove("darktoggle")});
  contactme.classList.remove("darkcontact");
  ball.forEach((e) => {
    e.classList.remove("right");
}) 
  localStorage.setItem("mode", "dark");
};

button.forEach((e) => {
    e.addEventListener('click' , () => {
   apply_mode();
})});



if(darkmode !== 'dark')
{
    dark();
}
/////////////////////////////////////////////////////










//////////////////Responsive   Menu////////////////

const menu_button = document.querySelector('.menu-button');
const menu = document.querySelector('.hidden-menu');

const showmenu = () => {
    const checker = menu.dataset.checker;
  if (checker === "off") {
    menu.classList.add("not-hidden-menu");
    menu.dataset.checker = "on";
  } else {
    menu.classList.remove("not-hidden-menu");
    menu.dataset.checker = "off";
  }
};

menu_button.addEventListener('click', () => {
    showmenu();
})

///////// hide menu if window big //////////


const media = window.matchMedia("(min-width: 720px)");
const mediachecker = (media) => {
    if(media.matches)
    {
        menu.classList.remove("not-hidden-menu");
        menu.dataset.checker = "on";
    }
    else{
        menu.dataset.checker = "off";
    }

}
mediachecker(media);
media.addListener(mediachecker);


//////////////////////PAGE ANIMATION USING ; FULLPAGE JS///////////////////////////


const allsections = new fullpage('#fullpage', {
  menu: '#menu',
  anchors:['Home', 'Ps', 'Cme'],
  autoScrolling:true,
  paddingTop: '100px',
  controlArrows: true,
  navigation: true,
  animateAnchor: true,
  scrollHorizontally: true,
  controlArrows: false,
  slidesNavigation: true,
});












/////////////////////////////////////////////////////
