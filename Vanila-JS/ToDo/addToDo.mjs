export const createAddToDoElement = (onAdd, containerClassName, inputOptions, buttonOptions) => {
  const $inputEle = document.createElement('input');
  const $addBtn = document.createElement('button');
  const $toDoContainer = document.createElement('div');
  $toDoContainer.classList.add(containerClassName);


  $inputEle.classList.add(inputOptions?.class);
  $inputEle.setAttribute('placeholder', inputOptions?.placeholder);


  $addBtn.classList.add(buttonOptions?.class);
  $addBtn.innerHTML = buttonOptions?.content;

  $addBtn.addEventListener('click', onAdd);

  $toDoContainer.append($inputEle, $addBtn);

  return $toDoContainer;
}