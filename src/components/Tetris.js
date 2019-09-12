import React, { useState } from 'react';
import StartButton from './StartButton';
import Stage from './Stage';
import Display from './Display';
import { StyledTetris, StyledTetrisWrapper } from '../Styles/StyledTetris';
import usePlayer from '../Hooks/usePlayer';
import useStage from '../Hooks/useStage';
const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const[player] = usePlayer();
    const [stage, setStage] = useStage(player);


    console.log('rerender');
        return (
            <div>
            <StyledTetrisWrapper>
                <StyledTetris>
                    <Stage stage={stage} />
                    <aside>
                        {gameOver ? (
                            // if gameOver exists/ is true, display text and use prop toi change text color
                            <Display gameOver={gameOver} text="GameOver" />
                        ) : (
                            // else display the normal text as intended
                        <div>
                            <Display text="Score" />
                            <Display text="Rows" />
                            <Display text="Level" />
                        </div>
                        )}

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