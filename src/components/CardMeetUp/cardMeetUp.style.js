import styled from 'styled-components';

export const Wrapper = styled.section`
display: flex;
justify-content: flex-start;
background-image: linear-gradient(to right, #00F260, #0575E6);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
color: #fff;
margin:10px 10px 10px 10px;
padding: 10px;
`;

export const Img = styled.section`
padding-top: 20px;
`;

export const Table = styled.table`
  border-collapse: collapse; 
  width: 100%; 
`;

export const Tr = styled.tr`
    text-align: left;
    padding: 8px;
`;

export const Td = styled.td`
    text-align: left;
    padding: 8px;
`;

export const Card = styled.section`
text-align: left;
padding: 8px;
`;

export const Button = styled.button`

/* Adapt the colors based on primary prop */

background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;