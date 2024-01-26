export { PixelBoard };

const Cell = () => {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  const paint = (event) => {
    if (!event.buttons) return;
    const color = event.altKey ? "transparent" : "black";
    cell.style.backgroundColor = color;
  };

  cell.addEventListener("mouseenter", (e) => paint(e));
  cell.addEventListener("mousedown", (e) => paint(e));

  return cell;
};

const Row = (itemCount) => {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < itemCount; i++) {
    const cell = Cell();
    row.appendChild(cell);
  }
  return row;
};

const removeChildren = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

const populateBoard = (width, height, boardElement) => {
  removeChildren(boardElement);
  for (let i = 0; i < height; i++) {
    const row = Row(width);
    boardElement.appendChild(row);
  }
};

const PixelBoard = (width, height) => {
  const element = document.createElement("div");
  element.classList.add("pixel-board");
  element.setAttribute("ondragstart", "return false");

  populateBoard(width, height, element);

  function getSize() {
    return { width, height };
  }

  function setSize(w, h) {
    width = w;
    height = h;
    populateBoard(w, h, element);
  }

  return {
    element,
    getSize,
    setSize,
  };
};
