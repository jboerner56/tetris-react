import React from 'react';
import { createStage } from '../createStage'
import StartButton from './StartButton';
import Stage from './Stage';
import Display from './Display';

class Tetris extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Tetris;