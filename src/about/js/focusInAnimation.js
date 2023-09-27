import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * アニメーション設定
 * @type {object}
 *  @type {{
 *    from: アニメーションの開始状態,
 *     to: アニメーションの終了状態
 *   }}
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

function focusInAnimation(selector = ".js-focusInAnimation") {
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
