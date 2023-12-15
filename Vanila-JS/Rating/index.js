const reviewBox = document.querySelector('.review');
const stars = document.querySelectorAll('.star');
let filledTill;
let currentRating = null;

//reviewBox.addEventListener('mouseenter', (event) => {
//  console.log('event:', event);
//});

//reviewBox.addEventListener('mouseleave', (event) => {
//  console.log('eventL:', event);
//});

const handleHover = (event) => {
  const { key } = event.target.dataset;
  for (let i = 1; i <= key; i++) {
    stars[i - 1].classList.add('star-filled');
  }
  filledTill = key;
}

const handleMouseLeave = (event) => {
  let index = filledTill;
  if (currentRating !== null) {
    for (let i = currentRating; i < 5; i++) {
      stars[i].classList.remove('star-filled');
    }
  } else {
    for (let i = 1; i <= filledTill; i++) {
      stars[i - 1].classList.remove('star-filled');
    }
  }

}

stars.forEach((star) => {
  star.addEventListener('mouseenter', handleHover);
  star.addEventListener('mouseleave', handleMouseLeave);
});

reviewBox.addEventListener('click', (event) => {
  const { key } = event.target.dataset;
  if (key) {
    currentRating = key;
    document.querySelector('.rating').innerText = key;
    handleMouseLeave();
  }
})


// 2 display float rating

const inputBox = document.querySelector('#rate-input');
inputBox.addEventListener('change', (event) => {
  const value = event.target.value;
  const rating = parseFloat(value);
  console.log('rating:', rating)
  if (rating < 0 || rating > 5) {
    alert("Enter the number between 1 to 5");
    return;
  }
  const index = parseInt(value);
  const starContainers = document.querySelectorAll('.star-below');
  for (let i = 1; i <= index; i++) {
    starContainers[i - 1].classList.add('star-filled');
  }
  if (index + 1 <= 5) {
    starContainers[index].classList.add('star-filled');
    starContainers[index].style.width = `${(rating - index) * 100}%`;
  }

  for (let i = index + 1; i <= 5; i++) {
    starContainers[i].classList.remove('star-filled');
  }

})