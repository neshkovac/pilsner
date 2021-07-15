import {
    gameConfig
} from "./gameConfig.js";

function getElementsFromDOM() {
    if (gameConfig.binObject.binElement === undefined) {
        const gameWrapper = document.querySelector('#main'); // Component to render rest of elements on.
        const gameWrapperChildrenDivs = Array.from(gameWrapper.children);
        const colisionZone = gameWrapperChildrenDivs[1]; // JS9 Bin DOM element wrapper, aka Colision zone.
        const binElement = colisionZone.children[0]; // JS9 Bin DOM element.
        gameConfig.colisionZoneObject.element = colisionZone;
        gameConfig.binObject.element = binElement;
    }
}

function initializeColisionZoneObjectParams() {
    // Retrieving colision zone element properties.
    const colisionZoneElementRightEdge = gameConfig.colisionZoneObject.element.offsetWidth;
    const colisionZoneElementLeftEdge = 0;
    const colisionZoneElementTopEdge = gameConfig.colisionZoneObject.element.offsetHeight;
    //Setting "colisionZoneObject" object's properties.
    gameConfig.colisionZoneObject.leftEdge = colisionZoneElementLeftEdge;
    gameConfig.colisionZoneObject.rightEdge = colisionZoneElementRightEdge;
    gameConfig.colisionZoneObject.topEdge = colisionZoneElementTopEdge;
}

function initializeBinObjectParams() {
    // Retrieving JS9 Bin element properties.
    const binElementpositionLeft = gameConfig.binObject.element.offsetLeft;
    const binElementWidth = gameConfig.binObject.element.offsetWidth;
    // Setting "gameObject" object's properties.
    gameConfig.binObject.positionLeft = binElementpositionLeft;
    gameConfig.binObject.leftBorder = binElementpositionLeft;
    gameConfig.binObject.width = binElementWidth;
    gameConfig.binObject.rightBorder = binElementpositionLeft + binElementWidth;
}

function initializeGameParams() {
    getElementsFromDOM();
    initializeBinObjectParams();
    initializeColisionZoneObjectParams();

}

export {
    initializeGameParams
}