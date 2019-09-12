import React from 'react';
import { createStage } from '../createStage'
import StartButton from './StartButton';
import Stage from './Stage';
import Display from './Display';
import { StyledTetris, StyledTetrisWrapper } from '../Styles/StyledTetris';

const Tetris = () => {
    console.log(createStage())
        return (
            <div>
            <StyledTetrisWrapper>
                <StyledTetris>
                    <Stage stage={createStage()} />
                    <aside>
                        <div>
                            <Display text="Score" />
                            <Display text="Rows" />
                            <Display text="Level" />
                        </div>
                        <div>
                            <StartButton />
                        </div>
                </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
            </div>
        );
}

export default Tetris;