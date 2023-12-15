const app = document.querySelector('.app');

let pre = "white", last;
const list = [];

const handleHover = (event) => {
  console.log('hover:', event.target.id);
  const id = event.target.id;
  if (!id) return;
  const x = new Number(id.split('_')[0].split(':')[1]);
  const y = new Number(id.split('_')[1].split(':')[1]);
  console.log('hover:', x, y);
  highlightQueen(x, y);
}

function highlightQueen(x, y) {
  let dx = x, dy = y;
  const id = `x:${x}_y:${y}`;
  console.log('doc:', id);
  let selected = [id];
  while (dx > 0 && dy > 0) {
    dx -= 1;
    dy -= 1;
    const _id = `x:${dx}_y:${dy}`;
    // const ele = document.querySelector(`#${_id}`);
    selected.push(_id);
  }
  dx = x; dy = y;
  while (dx < 8 && dy < 8) {
    dx += 1;
    dy += 1;
    const _id = `x:${dx}_y:${dy}`;
    // const ele = document.querySelector(`#${_id}`);
    selected.push(_id);
  }

  dx = x; dy = y;
  while (dx > 0 && dy < 8) {
    dx -= 1;
    dy += 1;
    const _id = `x:${dx}_y:${dy}`;
    // const ele = document.querySelector(`#${_id}`);
    selected.push(_id);
  }

  dx = x; dy = y;
  while (dx < 8 && dy > 0) {
    dx += 1;
    dy -= 1;
    const _id = `x:${dx}_y:${dy}`;
    // const ele = document.querySelector(`#${_id}`);
    selected.push(_id);
  }

  dx = x; dy = y;

  while (dx > 0) {
    dx -= 1;
    const _id = `x:${dx}_y:${dy}`;
    // const ele = document.querySelector(`#${_id}`);
    selected.push(_id);
  }
  dx = x; dy = y;

  while (dy > 0) {
    dy -= 1;
    const _id = `x:${dx}_y:${dy}`;
    // const ele = document.querySelector(`#${_id}`);
    selected.push(_id);
  }

  dx = x; dy = y;

  while (dx < 8) {
    dx += 1;
    console.log('dx:', dx);
    const _id = `x:${dx}_y:${dy}`;
    //  const ele = document.querySelector(`#${_id}`);
    selected.push(_id);
  }
  dx = x; dy = y;

  while (dy < 8) {
    dy += 1;
    const _id = `x:${dx}_y:${dy}`;
    //const ele = document.querySelector(`#${_id}`);
    selected.push(_id);
  }

  const items = new Array(...document.querySelectorAll('.item'));
  console.log('items:', items);
  //const filtered = items.filter(item => selected.includes(item.getAttribute('id')));
  items.forEach(node => {
    if (selected.includes(node.getAttribute('id'))) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  })

};


for (let i = 0; i < 8; i++) {
  last = pre;
  for (let j = 0; j < 8; j++) {
    const ele = document.createElement('div');
    ele.setAttribute('id', `x:${i}_y:${j}`);
    ele.classList.add('item');
    ele.style.background = last;
    last = last === "black" ? "white" : "black";
    list.push(ele);
  }
  pre = last === "black" ? "white" : "black";
}

app.append(...list);


app.addEventListener('mouseover', handleHover);
