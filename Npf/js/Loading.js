var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({
    loop: true,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i,
  });

const animating = (str) => {
  textWrapper.textContent = str;
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime
    .timeline({
      loop: true,
    })
    .add({
      targets: ".ml12 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i,
    })
    .add({
      targets: ".ml12 .letter",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i,
    });
};

const strings = ["Faragi Ayoub", "FrontEnd Dev", "C Programming"];
var index = -1;

setInterval(() => {
  ++index;
  index %= strings.length;
  animating(strings[index]);
  console.log(index);
}, 4000);

const loading = document.querySelector(".loading");
const website = document.querySelector(".web");
window.addEventListener("load", () => {
  setTimeout(() => {
    website.style.display = "block";
    website.style.opacity = 1;
    website.style.pointerEvents = "all";
    website.style.left = 0;
    loading.style.left = "100%";
  }, 1000);
  setTimeout(() => {
    loading.style.display = "none";
  }, 4000);
});