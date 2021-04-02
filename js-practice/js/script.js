let positionH = 0;
let positionV = 0;
const box = document.querySelector('.box');
const boxWidth = box.clientWidth;
const boxHeight = box.clientHeight;
const up = document.querySelector('.btn-up');
const left = document.querySelector('.btn-left');
const right = document.querySelector('.btn-right');
const down = document.querySelector('.btn-down');
const reset = document.querySelector('.btn-reset');
const item = document.querySelector('.thumb');
const itemWidth = item.clientWidth;
const itemHeight = item.clientHeight;
const movePosition = itemWidth;


up.addEventListener('click', () => {
    positionV -= movePosition;
    
    checkBtns();
    setPositionV();
});

left.addEventListener('click', () => {
    positionH -= movePosition;
    
    checkBtns();
    setPositionH();
});

right.addEventListener('click', () => {
    positionH += movePosition;
    
    checkBtns();
    setPositionH();
});

down.addEventListener('click', () => {
    positionV += movePosition;
    
    checkBtns();
    setPositionV();
});

reset.addEventListener('click', () => {
    positionV = 0;
    positionH = 0;
    setPositionH();
    setPositionV();
});

document.addEventListener('keydown', event => {
    if (event.key === "ArrowRight") {

        if (positionH < itemWidth * ((boxWidth / itemWidth) - 1)) {
        positionH += movePosition;
    
        setPositionH();
        checkBtns();
        }
    }
});

document.addEventListener('keydown', event => {
    if (event.key === "ArrowLeft") {
        if (positionH != 0) {
        positionH -= movePosition;
    
        setPositionH();
        checkBtns();
        }
    }
});

document.addEventListener('keydown', event => {
    if (event.key === "ArrowUp") {
        if (positionV != 0) {
        positionV -= movePosition;

        setPositionV();
        checkBtns();
        }
    }
});

document.addEventListener('keydown', event => {
    if (event.key === "ArrowDown") {
        if (positionV < itemWidth * ((boxHeight / itemWidth) - 1))
        positionV += movePosition;
    
        setPositionV();
        checkBtns();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        positionV = 0;
        positionH = 0;
        setPositionH();
        setPositionV();
    }
});

const setPositionH = () => {
    item.style.transform = `translate(${positionH}px, ${positionV}px)`;
    
  };
const setPositionV = () => {
    item.style.transform = `translate(${positionH}px, ${positionV}px)`;
  };

const checkBtns = () => {
    up.disabled = positionV === 0;
    left.disabled = positionH === 0;
    right.disabled = positionH === itemWidth * ((boxWidth / itemWidth) - 1);
    down.disabled = positionV === itemWidth * ((boxHeight / itemWidth) - 1);
  };

const checkArrows = () => {
    
};

checkBtns();
