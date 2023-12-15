import boxController from "./box.mjs";
import boxContainerController from "./boxContainer.mjs";

import { config } from "./data.mjs";

let state = [];

const stepBack = () => {
const currentState = [...state];
  for (let i = currentState.length - 1; i >= 0; i--) {
    setTimeout(() => {
      const element = document.querySelector(`#${currentState[i]}`);
      element.style["background-color"] = "white";
    }, i * 1000);
  }
  state=[];
};

const update = (box) => {
  console.log("CLickbox:", box.id, config.id, state);
  if (box.id === config.id || state.includes(box.id)) return;
  state.push(box.id);
  box.style["background-color"] = "green";
  if (state.length === config.data.length) {
    stepBack();
  }
};

const container = boxContainerController.createBoxContainerElement(
  config,
  update
);
const boxes = config.data.map((boxInfo) =>
  boxController.createBoxElement(boxInfo)
);
boxes.forEach((box) => {
  boxContainerController.addElementsToContainer(container, box);
});

const init = () => {
  console.log("continer:", container);
  document.body.appendChild(container);
};
init();
