const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
//console.log('cc:', cards);



const observer = new IntersectionObserver(elements => {
  console.log('ele:', elements);
  elements.forEach((ele) => {
    ele.target.classList.toggle('show', ele.isIntersecting);
    //if (ele.isIntersecting) {
    //  console.log('sec:', ele.target);
    //  observer.unobserve(ele.target);
    //}
  })
}, { threshold: 1 });

const lastObserver = new IntersectionObserver(elements => {
  const lastCard = elements[0];
  if (!lastCard.isIntersecting) return;
  loadNewCards();
  lastObserver.unobserve(lastCard.target);
  lastObserver.observe(document.querySelector('.card:last-child'));
});

lastObserver.observe(document.querySelector('.card:last-child'));

cards.forEach(card => {
  observer.observe(card);
  console.log('card:', card);
});

const loadNewCards = () => {
  for (let i = 0; i < 5; i++) {
    const ele = document.createElement('div');
    ele.classList.add('card');
    ele.innerText = "New Card added";
    container.append(ele);
    observer.observe(ele);
  }
}

