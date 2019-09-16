import React, { useState } from 'react';
import { createStage } from '../createStage';
import StartButton from './StartButton';
import Stage from './Stage';
import Display from './Display';
import { StyledTetris, StyledTetrisWrapper } from '../Styles/StyledTetris';
import usePlayer from '../Hooks/usePlayer';
import useStage from '../Hooks/useStage';
const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
// hooks taken from own files for readibility and easier debugging
    const[player, updatePosition, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);


    console.log('rerender');

    const movePlayer = dir => {
        // move position based on keyboard arrow press for x axis.
        updatePosition({ x: dir, y: 0 })
    }

    const startGame = () => {
        // reset game
        setStage(createStage());
        resetPlayer();
    }
    const drop = () => {
        // when called will move the block by 1 on the y-axis (drop down one row on grid)
        // when block hits another it will change collided to true and not allow block to drop any further down
        updatePosition({ x: 0, y: 1, collided: false })

    }
    const dropPlayer = () => {
        drop();

    }
    const move = ({ key }) => {
        if(!gameOver) {
            // 37 is the keycode for the left arrow key
            if(key === 37){
                // use movePlayer function and subtract one to move the block one to the left
                movePlayer(-1)
                // 39 is keycode for right arrow
            } else if(key === 39){
                // add one to move one block to the right
                movePlayer(1)
                // 40 is down arrow keycode
            } else if(key === 40)
            // 
            dropPlayer();
        }
    }
        return (
            <div>
                {/* wrapper around everything will allow for key presses anything on the screen for gameplay */}
            <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
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
                            <StartButton callback={startGame}/>
                        </div>
                </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
            </div>
        );
}

export default Tetris;