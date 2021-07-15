const gameConfig = {
    gameStarted: false,
    gameOver: false,
    speedUp: false,
    speedUpScoreLimit: 5,
    binObject: {
        element: undefined,
        width: undefined,
        positionLeft: undefined,
        leftBorder: undefined,
        rightBorder: undefined,
        moveByAmountPx: 15
    },
    colisionZoneObject: {
        element: undefined,
        leftEdge: undefined,
        rightEdge: undefined,
        topEdge: undefined
    },
    technologiesObject: {
        technologiesArray: [],
    },
    playerObject: {
        currentScore: 0,
    },
};

export {
    gameConfig
}