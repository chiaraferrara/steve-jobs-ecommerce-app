import { AppContext } from "@/ContextProvider";
import {
  Btn,
  Button,
  CartContainer,
  Container,
  FlexColumn,
  FlexRow,
} from "@/styles/globals";
import { use, useContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function Cart() {
  const { products } = useContext(AppContext);
  const { cart } = useContext(AppContext);
  const { removeFromCart } = useContext(AppContext);
  const { reduceQuantity } = useContext(AppContext);
  const {increaseQuantity} = useContext(AppContext);
  const { getTotalPrice } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const router = useRouter();

  const navigateToBuy = () =>{
    router.push('/payment')
  
  }

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [cart]);


  if (cart.length < 1) return ( <h1>Cart is empty</h1>)
  return (
    <>
      <Container>
        <FlexColumn>
          {" "}
          {cart.map((el) => (
            <Card
              key={el.id}
              sx={{ display: "flex", m: "20px", maxWidth: "400px" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Btn onClick={() => removeFromCart(el.id)}>
                    remove from cart
                  </Btn>
                  <Typography component="div" variant="h5">
                    Quantity:
                    <br />
                    <Btn onClick={() => reduceQuantity(el.id)}>-</Btn>{" "}
                    {el.quantity}<Btn onClick={() => increaseQuantity(el.id)}>+</Btn> <br />
                    Price: {el.price}€
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia>
                <img src={el.thumbnail} />
              </CardMedia>
            </Card>
          ))}
        </FlexColumn>{" "}
        <FlexColumn>
          <span>Total : {totalPrice}</span>
          <Btn onClick={() => navigateToBuy()}>Buy</Btn>
        </FlexColumn>
      </Container>
    </>
  );
}
