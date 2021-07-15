import {
    gameConfig
} from "./gameConfig.js";

function canMove(leftOrRight) {
    if (leftOrRight === "ArrowLeft") {
        return !isAtLeftCorner(); // if isAtLeftCorner() returns true, canMove() returns false.
    } else {
        return !isAtRightCorner(); // if isAtRightCorner() returns true, canMove() returns false.
    }
}

function isAtLeftCorner() { // left border of colision wrapper element.
    return gameConfig.binObject.positionLeft <= gameConfig.colisionZoneObject.leftEdge;
}

function isAtRightCorner() { // right border of colision wrapper element.
    return (gameConfig.binObject.positionLeft + gameConfig.binObject.width) >= gameConfig.colisionZoneObject.rightEdge;
}

function moveBinLeft() { // manipulate element.style.left property
    const newPositionLeft = gameConfig.binObject.positionLeft -= gameConfig.binObject.moveByAmountPx;
    gameConfig.binObject.element.style.left = newPositionLeft + "px";
};

function moveBinRight() { // manipulate element.style.left property
    const newPositionRight = gameConfig.binObject.positionLeft += gameConfig.binObject.moveByAmountPx;
    gameConfig.binObject.element.style.left = newPositionRight + "px";
}

function binController(eventKey) { // main controller for JS9 bin element movement.
    if (eventKey === "ArrowLeft" && canMove(eventKey)) {
        moveBinLeft();
    } else if (eventKey === "ArrowRight" && canMove(eventKey)) {
        moveBinRight();
    }
};

export {
    binController
}