const observer = new ResizeObserver((enteries) => {
  const [ele] = enteries;
  console.log('ele:', ele);
  ele.target.style.backgroundColor = ele.contentRect.width < 150 ? 'yellow' : 'red';
});

observer.observe(document.querySelector('.box'))