import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * 全要素共通のスクロール固定のインスタンスを作成する関数
 * @param {HtmlElement} element
 * @returns The new ScrollTrigger instance
 */
function pinAnimationSetting(element) {
  return ScrollTrigger.create({
    trigger: element,
    pin: true,
    end: "bottom 20%",
    // markers: true,
  });
}

/**
 * 最後の要素のみに対して実行するアニメーション関数
 * @param {HtmlElement} element
 * @return アニメーションの実行
 */
function scrollArrowFadeAnimation(element) {
  const ScrollArrowElement = document.querySelector(".p-scrollArrow");
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "bottom bottom",
        pinnedContainer: ".js-scrollTrigger",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    })
    .to(ScrollArrowElement, {
      autoAlpha: 0,
    });
}

/**
 * スクロールを固定するアニメーション関数
 * @param {string} [selector=".js-scrollTrigger"] - デフォルト値は「js-scrollTrigger」です。
 */
function scrollAnimation(selector = ".js-scrollTrigger") {
  /**
   * @type {NodeList}
   */
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (index === elements.length - 1) {
      scrollArrowFadeAnimation(element);
    }
    pinAnimationSetting(element);
  });
}

export default scrollAnimation;
