import styled from '@emotion/styled';

export const Global = styled.section`
    display: grid;
    /*//todo: Можна не передавати props, а  брати їх з theme */
     background-color: ${props => props.theme.bсgColor.old}; 
`;

export const TitleLugrasimoBold = styled.h2`
    margin-bottom: 24px;
    font-size: 48px;
    text-align: center;
    // color: darkred;

    font-family: "Lugrasimo", cursive;
    font-weight: 700;
    font-style: normal;
    //! color: blue;
    color: ${props => props.theme.fontColor.mainTitle};
`;
