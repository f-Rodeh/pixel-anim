export { PixelBoard };

let cellCounter = 0;
let data = [];

const Cell = (cellIndex) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.i = cellIndex;

  const paint = (event) => {
    if (!event.buttons) return;
    const color = event.altKey ? [0, 0, 0, 0] : [0, 0, 0, 255];
    cell.style.backgroundColor = `rgba(${color.toString()})`;
    data[cellIndex] = color;
  };

  cell.addEventListener("mouseenter", (e) => paint(e));
  cell.addEventListener("mousedown", (e) => paint(e));

  return cell;
};

const Row = (itemCount) => {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < itemCount; i++) {
    const cell = Cell(cellCounter++);
    data.push([0, 0, 0, 0]);
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
  cellCounter = 0;
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

  function getData() {
    const imageData = new ImageData(width, height)
    const flat = data.flat();
    for (let i = 0; i < imageData.data.length; i++) {
      imageData.data[i] = flat[i];
    }
    return imageData
  }

  return {
    element,
    getSize,
    setSize,
    getData
  };
};
