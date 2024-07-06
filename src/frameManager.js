import { PixelBoard } from "./board";
import { boardHeight, boardWidth } from "./boardSettings";
export { FrameManager }

const initFrame = Frame();
const FrameManager = {
  workingBoard: initFrame.board,
  widget: Widget(),
}

function Widget(){
  const container = document.createElement('div');
  const scrollable = document.createElement('div');
  const adder = document.createElement('div');

  container.classList.add('frame-container');
  scrollable.classList.add('scrollable-frame-list');
  adder.classList.add('new-frame-bt');

  container.append(scrollable, adder);
  scrollable.append(initFrame.thumbnail.display)

  adder.addEventListener('click', () => {
    const newFrame = Frame();
    scrollable.append(newFrame.thumbnail.display);
  })

  return container
}

function Thumbnail(){
  const display = document.createElement('canvas');
  const context = display.getContext("2d");

  display.width = boardWidth;
  display.height = boardHeight;

  function print(imageData) {
    display.width = imageData.width;
    display.height = imageData.height;
    context.putImageData(imageData, 0, 0);
  }

  return {
    display,
    print
  }
}

function Frame() {
  const thumbnail = Thumbnail();
  const board = PixelBoard(boardWidth, boardHeight);

  thumbnail.display.addEventListener('click', () => {
    FrameManager.workingBoard = board;
  });

  board.element.addEventListener('click', () => {
    thumbnail.print(board.getData())
  });

  return {
    thumbnail,
    board,
  }
}