// Authors: Jayman Matthews, MrBacon and LinearAccelerator
// Purpose: To learn JavaScript/Develop an idle game
// Date Created: 9th December 2020
// Data Modified: 10:32am AWST 10th December 2020 by Jayman Matthews
// READ: Add yourself to the author list and keep this updated if you are taking part in this open source project.

class Game {
    constructor (state) {
        Object.assign(this, state);
    }
}

let game = new Game({
    coins: {
        current: 0,
        per: {
            sec: 1,
            min: 60,
            hr: 3.6e3
        }
    }
});

const ELEMENTS = [];
const MAX_TIME = 50; //ms
const SECOND = 1000; //ms
// The above two constants will be used for when we need to have a smaller interval of 50ms, for example. It will also calculate earnings when the tab isn't in focus using Date.now() etc.

const init = () => {
    ELEMENTS[0] = coin_info = document.getElementsByClassName('currency-info');
    ELEMENTS[1] = coin_button = document.getElementById('coin-clicker');
    ELEMENTS[2] = coin_upg1 = document.getElementById('coin-upg-1');
    coin_button.onclick = () => game.coins.current++;
}

const update_game = () => {
    coin_info[0].textContent = `${game.coins.current} Coins`;
}

setInterval(update_game, MAX_TIME);
window.onload = () => init();
