console.log("box");

function createBoxElement(box) {
  const ele = document.createElement("div");
  addGridItemStyle(ele, box);
  ele.classList.add("box");
  ele.setAttribute("id", box?.id);
  return ele;
}

function addGridItemStyle(box, config) {
  box.style["grid-column-start"] = config.y[0];
  box.style["grid-column-end"] = config.y[1];
  box.style["grid-row-start"] = config.x[0];
  box.style["grid-row-end"] = config.x[1];
}

export default {
  createBoxElement,
};
