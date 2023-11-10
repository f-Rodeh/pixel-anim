export { PixelBoard };

const Row = (itemCount) => {
  const div = document.createElement("div");
  div.classList.add("row");
  for (let i = 0; i < itemCount; i++) {
    const item = document.createElement("div");
    div.appendChild(item);
  }
  return div;
};

const PixelBoard = (width, height) => {
  const element = document.createElement("div");
  element.classList.add("pixel-board");

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
