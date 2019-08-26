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