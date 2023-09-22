import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * アニメーション設定
 * @type {{
 * from: アニメーションの開始状態,
 * to: アニメーションの終了状態
 * }}
 */
const animationSetting = {
  from: {
    autoAlpha: 0,
    y: -100,
    display: "inline-block",
  },
  to: {
    autoAlpha: 1,
    y: 0,
    ease: "power3",
    delay: 0.2,
    duration: 0.5,

    stagger: {
      amount: 0.5,
      from: "start",
    },
  },
};
/**
 * テキストに対するTweenAnimationを開始する関数です。
 */
function animateEachCharacter() {
  /**
   * Tweenの対象要素
   * @type {NodeList}
   */
  const targetTweenTexts = document.querySelectorAll(
    '[data-tweenText-target="true"]',
  );

  /**
   * 引数に渡された文字型の配列をElementオブジェクトの配列に変換する関数
   * @param {Array} arrayOfString - 文字型の配列
   * @return {Array} arrayOfElement - Elementの配列
   */
  function createElement(arrayOfString) {
    return arrayOfString.map((char) => {
      if (char === " ") {
        return " ";
      } else {
        return `<span>${char}</span>`;
      }
    });
  }
  /**
   * テキストを一文字毎に分割する関数
   */
  function splitText(targetTweenTexts) {
    targetTweenTexts.forEach((element) => {
      const targetElement = element;
      const arrayOfTargetElementText = [...targetElement.textContent];
      targetElement.textContent = "";
      const arrayOfElement = createElement(arrayOfTargetElementText);
      arrayOfElement.forEach((element) => {
        targetElement.innerHTML += element;
      });
    });
  }

  splitText(targetTweenTexts);

  // アニメーション開始
  targetTweenTexts.forEach((element) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          pinnedContainer: ".js-scrollTrigger",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        element.querySelectorAll("span"),
        animationSetting.from,
        animationSetting.to,
      );
  });
}

export default animateEachCharacter;
