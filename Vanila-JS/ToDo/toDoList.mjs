

const addDragAttributes = ($ele, onDragStart) => {
  $ele.draggable = true;
  $ele.addEventListener('dragstart', onDragStart);
};

export const addDropAttributes = ($ele, onDrop, onDragOver) => {
  $ele.addEventListener('drop', onDrop);
  $ele.addEventListener('dragover', onDragOver);
  $ele.classList.add('dropZone');
};


export const createToDoItem = ({ id, name, index }, onDragStart) => {

  const item = document.createElement('div');
  item.setAttribute('id', id);
  item.classList.add('to-do-item');
  const indexEle = document.createElement('div');
  const nameEle = document.createElement('div');
  addDragAttributes(item, onDragStart);
  indexEle.innerText = index;
  nameEle.innerText = name;
  item.append(indexEle, nameEle);
  return item;
}

export const createToDoListElement = (list, heading, onDragStart, className = 'to-do-list-container') => {

  const container = document.createElement('div');
  const title = document.createElement('h3');
  title.innerText = heading;
  container.classList.add(className);
  const arrOfItem = []
  list.forEach(element => {
    arrOfItem.push(createToDoItem(element, onDragStart));
  });

  container.append(title, ...arrOfItem);
  return container;


}

export const addElementToList = (item, onDragStart) => {
  const $toDoItem = createToDoItem(item, onDragStart);
  const $container = document.querySelector('.to-do-list-container');
  $container.append($toDoItem);
  return $toDoItem;
}