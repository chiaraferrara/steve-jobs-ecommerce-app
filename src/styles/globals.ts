import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 auto;
width: 80%;
justify-content: center;
`;

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: #f5f5f5;`;



export const Button = styled.button`
background-color: #f5f5f5;
border: none;
cursor: pointer;`
;

export const CartQty = styled.div`
background-color: #e2e2e2;
border-radius: 2em;
width: '0.8'rem;
height: 0.8rem;
border: 0px solid #000;
display: flex;
justify-content: center;
font-size: 0.7rem;
padding: 0.2rem;`
;


export const CartContainer = styled.div`
display: flex;
flex-flow: row;`;


export const Card = styled.div`
display: flex;
flex-direction: row wrap;
border: 1px solid #e2e2e2;
border-radius: 0.5rem;
margin: 0.5rem;
padding: 0.5rem;
width: 50rem;`;

export const Btn = styled.button`
background-color: #ffffff;
border: 1px solid #e2e2e2;
border-radius: 2rem;
max-width: fit-content;
max-height: fit-content;
`;

export const FlexColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const FlexRow = styled.div`
display: flex;
flex-direction: row;`;