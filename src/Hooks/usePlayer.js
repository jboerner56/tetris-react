import { useState } from 'react';
import { randomBlock} from '../Blocks';

const usePlayer = () => {
    // creates state for the player
    // returns array with 2 items in it
    const [player, setPlayer] = useState({
        // setting initial state for the player
        // initial (x,y)position/ coord.
        pos: { x: 0, y: 0 },
        block: randomBlock().shape,
        collided: false,
    });
    return [player];
    // short for
    // first sets/ creates state by setting playerState equal to useState();
    // const playerState = useState();
    // second 2 variables are setting the player state into the 2 indexes needed in playerState
    // const player = playerState[0];
    // const setPlayer = playerState[1];
}

export default usePlayer;