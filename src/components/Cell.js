import React from 'react';
// import style from '../Styles/Cell.style.css';
import StyledCell from '../Styles/StyledCell';
import { Blocks } from '../Blocks';
const Cell = ({type}) => (
    // will grab color our of the blocks array
    // using L (one of the block names) to hold the place for the gameplay functions later
    <StyledCell type={'L'} color={Blocks['L'].color}>cell</StyledCell>
)

export default Cell;