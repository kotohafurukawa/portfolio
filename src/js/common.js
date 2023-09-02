import "@/scss/style.scss";
import { gsap } from "gsap";

const card = document.querySelector("#js-card");
card.addEventListener("mousemove", (event) => {
  const rect = card.getBoundingClientRect();
  console.log(rect);
  const rectCenterX = rect.left + rect.width / 2;
  const rectCenterY = rect.top + rect.height / 2;
  const deltaX = rectCenterX - event.clientX;
  const deltaY = rectCenterY - event.clientY;

  gsap.to(".c-card", { rotation: 360, x: 100, duration: 2 });
});

const x = 0;
if (x === 3) {
  console.log("hello world");
}
