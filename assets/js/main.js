import {
    gameConfig
} from './gameConfig.js';
import {
    initializeGameParams
} from './gameInit.js';
import {
    binController
} from './binBusinessLogic.js';


function windowAddEventListener() {
    window.addEventListener('keydown', function keyDownEventListener($event) {
        const eventKey = $event.key;
        binController(eventKey);
        if (gameConfig.gameOver) {
            this.removeEventListener('keydown', keyDownEventListener);
        }
    });
}

window.onload = function () {
    initializeGameParams();
    windowAddEventListener();
};