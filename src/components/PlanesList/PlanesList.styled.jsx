import styled from '@emotion/styled';


export const ListPlanes = styled.ul`
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));
    gap: 32px;
    outline: 1px solid red;
`;

export const ItemPlanes = styled.ul`
    display: grid;
    gap: 12px;
    padding: 10px;
    background-color: #ffdb92;
    outline: 1px solid grey;
`;