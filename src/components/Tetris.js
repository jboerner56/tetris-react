import React, { useState } from 'react';
import { createStage, checkCollision } from '../createStage';
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
        if(!checkCollision(player, stage, { x: dir, y: 0})) {
            // move position based on keyboard arrow press for x axis.
            updatePosition({ x: dir, y: 0 })
        }
    }

    const startGame = () => {
        // reset game
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }
    const drop = () => {
        // allow move to happen as long as checkCollision is false
        if(!checkCollision(player, stage, { x: 0, y: 1 })){
            // when called will move the block by 1 on the y-axis (drop down one row on grid)
            // when block hits another it will change collided to true and not allow block to drop any further down
            updatePosition({ x: 0, y: 1, collided: false })
            // if it is true then set that block in place
        } 
        else {
            // if the player position is less than 1 and it collided with a block that means the game is over
            if(player.pos.y < 1){
                console.log("game over", player.pos);
                setDropTime(null);
                setGameOver(true);
            }
            updatePosition({ x: 0, y: 0, collided: true});
        }

    }
    const dropPlayer = () => {
        drop();

    }
    const move = ({ keyCode }) => {
        if(!gameOver) {
            // 37 is the keycode for the left arrow key
            if(keyCode === 37){
                // use movePlayer function and subtract one to move the block one to the left
                console.log("left arrow");
                
                movePlayer(-1)
                // 39 is keycode for right arrow
            } else if(keyCode === 39){
                // add one to move one block to the right
                console.log("right arrow", player.pos);
                movePlayer(1)
                // 40 is down arrow keycode
            } else if(keyCode === 40)
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