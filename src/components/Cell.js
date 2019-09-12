import React from 'react';
// import style from '../Styles/Cell.style.css';
import StyledCell from '../Styles/StyledCell';
import { Blocks } from '../Blocks';
const Cell = ({type}) => (
    // will grab color our of the blocks array
    <StyledCell type={type} color={Blocks[type].color} />
)

export default Cell;