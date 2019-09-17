export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
// function to create the stage itself
export const createStage = () =>
// create the array using an array with the height as an argument
Array.from(Array(STAGE_HEIGHT), () => 
// inline arrow function with stage width as an argument
// fill[0] is an empty row that will be filled with blocks
    // this will create a array for each row in the play field
        // the 0 represents a cell with no blocks in it
        // 
    new Array(STAGE_WIDTH).fill([0], 'clear')
)

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
    for( let y = 0; y < player.block.length; y += 1) {
        for(let x = 0; x < player.block[0].length; x += 1) {
            // check to make sure we are on a actual cell
            if(player.block[y][x] !== 0){
                if(
                                    // make sure move is not outside of the play field height
                // checking to see if the intended move it not a value in the playing field
                !stage[y + player.pos.y + moveY] || 
                // make sure move is not outside the play field width
                // add second bracket set to check the intended X (horizontal) value move
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || 
                //
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                )
                console.log("position", player.pos);
                
                return true;
            }
        }
    }
}