const lala = document.querySelectorAll(" .fp-slidesNav > ul > li > a > span");
const rightnav = document.querySelectorAll(
    " #fp-nav > ul > li > a > span"
  );
  const  arrow =  document.querySelectorAll(".fp-controlArrow");
  
  if(darkmode !== 'dark')
  {
    lala.forEach((e) => {e.classList.add("darknav")});
    rightnav.forEach((e) => {e.classList.add("darknav")});
    arrow.forEach((e) => {e.classList.add("darkcontact")});
}