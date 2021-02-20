let dragged;

document.addEventListener(
  "dragstart",
  (e) => {
    dragged = e.target;
    if (dragged.className === "textBox") {
      console.log("drag started");
      dragged.style.opacity = 0.5;
    }
  },
  false
);

document.addEventListener(
  "dragend",
  (e) => {
    const [x, y] = [e.screenX, e.screenY];
    console.log(x, y);
    if (e.target.className === "textBox") textBoxPosition(x, y);
  },
  false
);

const textBoxPosition = (x, y) => {
  const textBoxHeight = 100 + 50;
  const textBoxWidth = 100 - 50;
  dragged.style.position = "absolute";
  dragged.style.left = x - textBoxWidth + "px";
  dragged.style.top = y - textBoxHeight + "px";
};

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
