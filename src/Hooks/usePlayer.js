import { useState, useCallback } from 'react';
import { randomBlock, Blocks} from '../Blocks';
import { STAGE_WIDTH } from '../createStage';

const usePlayer = () => {
    // creates state for the player
    // returns array with 2 items in it
    const [player, setPlayer] = useState({
        // setting initial state for the player
        // initial (x,y)position/ coord.
        pos: { x: 0, y: 0 },
        // use the first item in the blocks array so nothing shows up on the first render
        block: Blocks[0].shape,
        collided: false,
    });
// setting state either initially or with the updated position on rerendering
    const updatePosition = ({ x, y, collided }) => {
        // player being used/updated so we can set the player state
        // prev is for presious state, if there was one
        setPlayer(prev => ({
            // spread previous state/ then update position by taking previous state and adding the x or y coord to it.
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }
    const rotateBlock = (block, dir) => {
        // convert rows to columns
        // map through the block twice to convert the rows to columns
        const rotatedBlock = block.map((_, index) => block.map(column => column[index]));
        // reverse each row to get a rotated block
        // clockwise is positive direction, negative is for counterclockwise rotation
        if (dir > 0){
            return rotateBlock.map(row => row.reverse());
        } else {
            return rotateBlock.reverse();
        }

    }
    const playerRotateBlock = (stage, dir) => {

    }
    // need to use the useCallback builtin function to stop the game from going into a infinite loop
    const resetPlayer = useCallback(() => {
            setPlayer({
                // do not need to use state since it is resetting everything/ new game
                // set x-axis to half the array width to get it kind of in the middle
                // y-axis is set to zero so it will always start at the top
                pos: {x: STAGE_WIDTH/2 - 1, y: 0},
                block: randomBlock().shape,
                collided: false
            })
        }, [])

    // function returns the player array
    return [player, updatePosition, resetPlayer];
    // short for
    // first sets/ creates state by setting playerState equal to useState();
    // const playerState = useState();
    // second 2 variables are setting the player state into the 2 indexes needed in playerState
    // const player = playerState[0];
    // const setPlayer = playerState[1];
}

export default usePlayer;