export { LayerTab };

const Layer = (pixelBoard) => {
  const element = document.createElement("div");
  element.classList.add("layer");

  function getBoard() {
    return pixelBoard;
  }

  return {
    element,
  };
};

const LayerTab = () => {
  const element = document.createElement("div");
  element.classList.add("layer-tab");

  function addLayer(pixelBoard) {}

  function removeLayer() {}

  return {
    element,
    addLayer,
    removeLayer,
  };
};
