import { PixelBoard } from "./board";
import { LayerTab } from "./layers";
import "./style.css";

const layerTab = LayerTab();
layerTab.addLayer();
document.body.append(layerTab.element);

const drawingBoard = PixelBoard(12, 12);
document.body.append(drawingBoard.element);

const button = document.createElement('Button');
button.textContent = 'Get Data'
button.addEventListener('click', ()=>{console.log(drawingBoard.getData())});
document.body.append(button)