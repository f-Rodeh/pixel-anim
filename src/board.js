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

const PixelBoard = (width, height) => {
  const element = document.createElement("div");
  element.classList.add("pixel-board");
  element.setAttribute("ondragstart", "return false");

  for (let i = 0; i < height; i++) {
    const row = Row(width);
    element.appendChild(row);
  }

  function getSize() {
    return { width, height };
  }

  function setSize(w, h) {
    width = w;
    height = h;
  }

  return {
    element,
    getSize,
    setSize,
  };
};
