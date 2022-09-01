const eye = document.querySelector(".inside-ball");
const eye2 = document.querySelector(".inside-ball-right");
window.addEventListener("mousemove", (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX) / 20;
  const y = -(window.innerHeight / 2 - evt.pageY) / 20;
  eye.style.transform = `translateY(${y}px) translateX(${x}px)`;
  eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
});
