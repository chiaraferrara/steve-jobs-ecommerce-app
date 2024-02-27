import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 60%;
  justify-content: center;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
`;

export const Button = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const CartQty = styled.div`
  background-color: #e2e2e2;
  border-radius: 2em;
  width: "1" rem;
  height: 1.3rem;
  border: 0px solid #000;
  display: flex;
  justify-content: center;
  font-size: 0.7rem;
  padding: 0.2rem;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row wrap;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 50rem;
`;

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
  flex-direction: row;
`;

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

export const Div = styled.div`
  font-family: "Arial", sans-serif;
  height: 80vh;
`;

export const Img = styled.img`
  max-width: 250px;
  max-height: 150px;
  margin: 0.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #eb0029;
  padding: 0.5rem;
`;

export const FooterContainer = styled.footer`
 
  padding: 1rem 2rem;
  background-color: #1e1e1e;
  color: white;
  height: fit-content;
  position: relative;
    bottom: 0;
    width: 100%;
    padding: 20px 0;
  a,
  a:visited {
      color: white;
      text-decoration: none;
  }
 
`;
