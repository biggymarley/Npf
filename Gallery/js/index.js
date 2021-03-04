const background = document.querySelector(".body");
const name =  document.querySelector("#name");
let darkmode = localStorage.getItem("mode");



const dark = () => {
     background.classList.add("darkbody");
     name.classList.add("darkheader");
    localStorage.setItem("mode", "light");
  };
  
  const light = () => {
    background.classList.remove("darkbody");
    name.classList.remove("darkheader");
    localStorage.setItem("mode", "dark");
  };

  if(darkmode !== 'dark')
{
    dark();
}

