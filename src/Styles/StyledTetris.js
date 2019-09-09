import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
// fit to fill the available viewport/screen
    width: 100vw;
    height: 100vh;
    background: blue;
    background-size: cover;
    overflow: hidden;
`
export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding 35px;
    margin: 0;
    max-width: 850px;
    
    aside {
        width:100%;
        max-width: 250px;
        display: block;
        padding: 0 18px;
    }
`;