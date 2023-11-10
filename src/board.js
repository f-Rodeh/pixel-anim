export { PixelBoard };

const Cell = () => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("mouseenter", (e) => {
    if (!e.buttons) return;
    const color = e.altKey ? "transparent" : "black";
    cell.style.backgroundColor = color;
  });
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
