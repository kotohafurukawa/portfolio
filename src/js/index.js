import VanillaTilt from "vanilla-tilt";

/**
 * カードのTiltアニメーションを開始する関数です。
 */
function cardTiltAnimationInit() {
  /**
   * Tiltの対象となるDOM要素です。
   * @type {NodeList}
   */
  const cardList = document.querySelectorAll(".c-card");
  /**
   * @see https://github.com/micku7zu/vanilla-tilt.js
   */
  VanillaTilt.init(cardList, {
    reverse: true,
    speed: 2000,
  });

  /**
   * カード子要素の背景画像に対して個別にTiltを設定します。
   */
  cardList.forEach((card) => {
    /**
     * カード背景画像の親要素であるcardのイベント発火がトリガー
     */
    card.addEventListener("tiltChange", () => {
      /**
       * カードの背景画像のDOM要素です。
       * @type {NodeList}
       */
      const cardBackGroundImage = document.querySelectorAll(".c-card__bg");
      /**
       * @see https://github.com/micku7zu/vanilla-tilt.js
       */
      VanillaTilt.init(cardBackGroundImage, {
        reverse: true,
        max: 20,
        startX: 50,
        speed: 2000,
        scale: 1.2,
      });
    });
  });

  cardList.forEach((card) => {
    card.removeEventListener("mouseleave", () => {
      setTimeout(() => {
        VanillaTilt.reset(card);
      }, 2000);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  cardTiltAnimationInit();
});
