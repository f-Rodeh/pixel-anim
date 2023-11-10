export { PixelBoard };

const PixelBoard = (width, height) => {
  const element = document.createElement("div");
  element.classList.add("pixel-board");

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
