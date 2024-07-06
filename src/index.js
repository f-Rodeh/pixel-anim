import { FrameManager } from "./frameManager";
import "./style.css";

const mgmt = FrameManager;
document.body.append(mgmt.widget, mgmt.workingBoard.element)