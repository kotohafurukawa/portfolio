import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * スクロールを固定するアニメーション関数
 * @param {string} [selector=".js-scrollTrigger"] - デフォルト値は「js-scrollTrigger」です。
 */
function scrollAnimation(selector = ".js-scrollTrigger") {
  document.querySelectorAll(selector).forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      pin: true,
      end: "bottom 20%",
      // markers: true,
    });
  });
}

export default scrollAnimation;
