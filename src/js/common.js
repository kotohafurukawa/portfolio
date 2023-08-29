import '@/scss/style.scss';

const card = document.querySelector('#js-card');
card.addEventListener("mousemove" , (event) => {
  const rect = card.getBoundingClientRect();
  console.log(rect);
  const rectCenterX = rect.left + rect.width / 2;
  const rectCenterY = rect.top + rect.height / 2;
  const deltaX = rectCenterX - event.clientX;
  const deltaY = rectCenterY - event.clientY;

  card.style.transform = `rotateX(${-deltaX * 0.05}deg) rotateY(${deltaY * 0.05}deg)`;
});