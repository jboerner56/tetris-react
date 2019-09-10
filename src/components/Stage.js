import React from 'react';
import Cell from './Cell';
import { StyledStage } from '../Styles/StyledStage';
const Stage = ({stage}) => (
    // get width from the first 
    <StyledStage width={stage[0].length} height={stage.length}>
        {/* map thru stage array while also mapping through the row array as well
            map will render a cell component for each. 
            type is the first type in the cell array (cell component) whis is 0/empty cell with no blocks in it
        */}
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </StyledStage>
)

export default Stage;