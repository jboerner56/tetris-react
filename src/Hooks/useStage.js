import { useState, useEffect } from 'react';

import { createStage } from '../createStage';

const useStage = (player, resetPlayer) => {
    // set up same way as usePlayer for creating the stage
    const [stage, setStage] = useState(createStage());
    useEffect(() => {
        const updateStage = prevStage => {
            // reset stage from previous render
            // need to map through twice bc it is a multidimensional array
            // second map will grab the second value for each block
            // comes from createStage file [0,'clear'], second index
            // if it's clear than we will allow the falling block to occupy it
            // if it is not clear(already occupied by a block), return the block as it was
            const newStage = prevStage.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );
            // after checking if the cell is occupied or not. we will draw the tetris block in the cells
            // get block from the usePlayer hook, gets sent in through the useStage hook above, so we have access to the player methods here
            // only need to loop through each cell without returning anything bc this is only to check if the cell is clear or occupied
            // have to again loop though the array twice for both x and y axis'
            player.block.forEach((row, y) => {
                row.forEach((value, x) => {
                    // value is the block that we are looping through, from Blocks.js array
                    // if value is not zero, that means there is something that is supposed to be in that cell for the block
                    if(value !== 0) {

                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value, 
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });
            return newStage
        };
        setStage(prev => updateStage(prev))
    }, [player.block, player.collided, player.pos.x, player.pos.y]);
    return [stage, setStage];
}

export default useStage;