import { createAddToDoElement } from './addToDo.mjs';

import { createToDoListElement, createToDoItem, addElementToList, addDropAttributes } from './toDoList.mjs';

let toDoList = [];

const handleDragItemStart = (e) => {
  console.log('dragStart:', e, e.target.id);
  e.dataTransfer.setData("item", e.target.id);
}

const handleDragOver = (e) => {
  console.log('onDrag e:', e);
  e.preventDefault();
}

const handleOnDrop = (e) => {
  console.log('onDrop e:', e);
  e.preventDefault();
  const fetchData = e.dataTransfer.getData("item");
  console.log('dragged:', fetchData, e.target);
  const $node = e.target;
  const $droppedEle = document.getElementById(fetchData)
  if ($node.classList.contains('dropZone')) {
    $node.appendChild($droppedEle);
  } else {
    $node.insertAdjacentElement('afterend', $droppedEle);
  }
}

const handleAddToDo = (e) => {
  console.log('e:', e);
  const id = new Date().getTime();
  const $input = document.querySelector('.to-do-add-input');

  const name = $input.value;
  console.log('na:', name);
  if (name) {
    toDoList.push({ id, name });
    const $toDoItem = addElementToList({ id, name, index: toDoList.length }, handleDragItemStart);
    $input.value = null;
  }

}



const app = document.querySelector('.app');


const init = ($rootEle, list) => {

  toDoList = list;

  const $addToDoInput = createAddToDoElement(handleAddToDo, 'to-do-add-container', { class: 'to-do-add-input', placeholder: 'type to do...' }, { class: 'to-do-add-btn', content: 'Add' });
  const $listItems = document.createElement('div');
  $listItems.classList.add('list-container');

  const $toStartlistEle = createToDoListElement(list, "To Start List", handleDragItemStart);
  const $inProgressList = createToDoListElement([], "In Progress List", handleDragItemStart, 'to-do-inProgress-list-container');
  addDropAttributes($inProgressList, handleOnDrop, handleDragOver);
  addDropAttributes($toStartlistEle, handleOnDrop, handleDragOver);
  $listItems.append($toStartlistEle, $inProgressList);

  const test = document.querySelector('.test');
  addDropAttributes(test, handleOnDrop, handleDragOver);
  //$toStartingList.innerText = "To Start List"
  console.log('ele:', $addToDoInput);

  $rootEle.append($addToDoInput, $listItems);

}



init(app, []);