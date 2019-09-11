import styled from 'styled-components';

const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    // if there is a block(by type not being empty), cell will get a border around it.
    border: ${props => (props.type === 0 ? '0px' : '4px solid')};
    border-color: rgba(${props => props.color})};
    border-bottom-color: rgba(${props => props.color}, 0.1);
    border-right-color: rgba(${props => props.color}, 1);
    border-top-color: rgba(${props => props.color}, 1);
    border-left-color: rgba(${props => props.color}, 0.3);
    `
export default StyledCell;