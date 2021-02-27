//////////////////////DARKMODE///////////////////////

const background = document.querySelector(".body");
const button = document.querySelectorAll(".toggle");
const a = document.getElementsByTagName('a');
const array_a = Array.from(a);
const header =  document.querySelector(".header");
const ball = document.querySelectorAll('.ball');
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
   background.classList.add("darkbody");
   header.classList.add("darkheader");
   array_a.forEach((e) => {e.classList.add("darktext")});
   button.forEach((e) => {e.classList.add("darktoggle")});
   ball.forEach((e) => {
       if(e)
        e.classList.add("right");
});

  localStorage.setItem("mode", "light");
};

const light = () => {
  background.classList.remove("darkbody");
  header.classList.remove("darkheader");
  array_a.forEach((e) => {e.classList.remove("darktext")});
  button.forEach((e) => {e.classList.remove("darktoggle")});
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


/////////////////////////////////////////////////


/////////////////////////////////////////////////////
