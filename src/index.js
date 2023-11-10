import { PixelBoard } from "./board";
import "./style.css";

console.log("Hello World!");

const px = PixelBoard(24, 24);
document.body.append(px.element);
console.log(px.getSize());
px.setSize(128, 128);
console.log(px.getSize());
