function createBoxContainerElement(config,callBack) {
  const container = document.createElement("div");
  container.classList.add("box-container");
  container.setAttribute("id", config?.id);
  containerEventListner(container,callBack);
  return container;
}

function containerEventListner(container,callBack) {
  container.addEventListener("click", (event) => {
    callBack(event.target);
  });
}

function addElementsToContainer(container, element) {
  container.appendChild(element);
}

export default {
  createBoxContainerElement,
  addElementsToContainer,
};
