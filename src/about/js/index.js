import "@/scss/object/project/about.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animateEachCharacter from "@/about/js/animateEachCharacter";
import scrollAnimation from "./scroll";
import focusInAnimation from "./focusInAnimation";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  scrollAnimation();
  animateEachCharacter();
  focusInAnimation();
});
