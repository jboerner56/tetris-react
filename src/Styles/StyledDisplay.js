import styled from 'styled-components';

const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 15px 0;
    padding: 15px;
    border: 3px solid red;
    width: 100%;
    border-radius: 15px;
    // changes gameOver from grey to red when game ends
    color: ${props => (props.gameOver ? 'yellow' : 'grey')};
    
`;

export default StyledDisplay;