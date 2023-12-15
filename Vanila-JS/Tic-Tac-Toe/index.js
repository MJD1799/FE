
const state = {
  turn: 'X',
  data: [[null, null, null], [null, null, null], [null, null, null]],
  winner: false,
}

const updateState = () => {
  if (state.turn === 'X') state.turn = 'O';
  else state.turn = 'X';
}

const checkTheWinner = (x, y, data) => {
  let c = 0;
  console.log('data:', state.data);
  for (let j = 0; j < 3; j++) {
    if (state.data?.[x]?.[j] === data) c++;
  }
  if (c === 3) return true;
  c = 0;
  for (let j = 0; j < 3; j++) {
    if (state.data?.[j]?.[y] === data) c++;
  }
  if (c === 3) return true;

  if (x === 1 && y === 1 && state.data?.[x - 1]?.[y - 1] === data && state.data?.[x + 1]?.[y + 1] === data) return true;
  if (x === 1 && y === 1 && state.data?.[x - 1]?.[y + 1] === data && state.data?.[x + 1]?.[y - 1] === data) return true;

  if (x === 0 && y === 0 && state.data?.[x + 1]?.[y + 1] === data && state.data?.[x + 2]?.[y + 2] === data) return true;
  if (x === 2 && y === 2 && state.data?.[x - 1]?.[y - 1] === data && state.data?.[x - 2]?.[y - 2] === data) return true;

  if (x === 2 && y === 0 && state.data?.[x - 1]?.[y + 1] === data && state.data?.[x - 2]?.[y + 2] === data) return true;
  if (x === 0 && y === 2 && state.data?.[x + 1]?.[y - 1] === data && state.data?.[x + 2]?.[y - 2] === data) return true;

  return false;

}

const createTicTacToeBoard = () => {
  const item = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const gridItem = document.createElement('div');
      gridItem.setAttribute('id', `${i}:${j}`);
      gridItem.classList.add('item');
      item.push(gridItem)
    }
  }
  return item;
}

const getEvents = () => {
  const handleClick = (event) => {
    console.log('eee:', event.target.id);
    const id = event.target.id;
    const node = event.target;
    if (!id || state.winner) return;
    const arr = id.split(':');
    const x = arr[0];
    const y = arr[1];
    if (x && y && !node.innerText) {
      console.log('eee1:', x, y);
      state.data[x][y] = state.turn;
      node.innerText = state.turn;
      node.classList.add('disable');
      const winner = checkTheWinner(x, y, state.turn);
      if (winner) {
        const winnerNode = document.querySelector('.winner');
        winnerNode.innerText = `Winner is ${state.turn}`;
        state.winner = true;
      }
      updateState();
    }


  }
  return { handleClick };
}

const init = () => {
  const app = document.querySelector('.app');
  const board = createTicTacToeBoard();
  console.log('b;', board);
  const { handleClick } = getEvents();
  app.append(...board);
  app.addEventListener('click', handleClick);
}

init();