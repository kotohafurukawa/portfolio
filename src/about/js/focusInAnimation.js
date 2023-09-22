import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * gsapのアニメーション設定
 * @type {object}
 */
const animationSetting = {
  from: {
    filter: "blur(12px)",
    opacity: 0,
  },
  to: {
    filter: "blur(0px)",
    opacity: 1,
  },
};

function focusInAnimation(selector = ".js-fadeInAnimation") {
  const targetElements = document.querySelectorAll(selector);

  targetElements.forEach((element) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center",
          pinnedContainer: ".js-scrollTrigger",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(element, animationSetting.from, animationSetting.to);
  });
}

export default focusInAnimation;