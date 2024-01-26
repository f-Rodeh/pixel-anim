import { PixelBoard } from "./board";
import { LayerTab } from "./layers";
import "./style.css";

const layerTab = LayerTab();
layerTab.addLayer();
document.body.append(layerTab.element);

const drawingBoard = PixelBoard(12, 12);
document.body.append(drawingBoard.element);
