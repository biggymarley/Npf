const lala = document.querySelectorAll(" .fp-slidesNav > ul > li > a > span");


if(darkmode !== 'dark')
{
    lala.forEach((e) => {e.classList.add("darknav")});
}