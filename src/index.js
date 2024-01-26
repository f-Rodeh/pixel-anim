import { PixelBoard } from "./board";
import "./style.css";

console.log("Hello World!");

const px = PixelBoard(120, 120);
document.body.append(px.element);
console.log(px.getSize());
console.log(px.element);
px.setSize(12, 12);
console.log(px.getSize());
console.log(px.element);
