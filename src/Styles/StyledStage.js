import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        // keeping the css looking ok/ not stretched out on different screens
        // aspect ratio will be same across screens 
        calc(25vw / ${props => props.width})
        );
        grid-template-columns: repeat(${props => props.width}, 1fr);
        grid-gap: 1px;
        border: 2px solid green;
        width: 100%;
        max-width: 25vw;
        background: green;
`;