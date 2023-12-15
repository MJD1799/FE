let progress = 0;

const init = () => {
  const progressBox = document.querySelectorAll('.progress-bar');
  progressBox.forEach((box) => {
    box.style.setProperty("--dynamic-width", '100%');
  })


  const intervalId = setInterval(() => {
    progress += 0.1;
    progressBox.forEach((box) => {
      box.style.setProperty("--dynamic-width", `${progress * 5}%`);
    })
    //progressBox.style.setProperty("--dynamic-width", `${progress * 5}%`);
    // progressBox.setAttribute("data-progress", `Loading...(${progress * 5}%)`);

    if (progress * 5 > 100) clearInterval(intervalId);
  }, 10);
}

init();