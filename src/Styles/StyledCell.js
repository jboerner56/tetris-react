import styled from 'styled-components';

const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color})
    // if there is a block(by type not being empty), cell will get a border around it.
    border: ${props => (props.type === 0 ? '0px' : '4px solid')};
    border-color: rgba(${props => props.color})};
    `
export default StyledCell;