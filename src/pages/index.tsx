import Head from "next/head";
import { Inter } from "next/font/google";
import { useContext, useEffect } from "react";
import { AppContext } from "@/ContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@/styles/globals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { products, loading, error } = useContext(AppContext);
  const { addToCart } = useContext(AppContext);
  const { cartProducts , setCartProducts } = useContext(AppContext);

  useEffect(() => {
    console.log(products);
    console.log(loading);
    console.log(error);
  }, []);


  {!products && !loading && !error && <h1>Loading</h1>}
  return (
    <>
      <Container>
        {products?.map((product) => (
          <Card key={product.id} sx={{ width:245, m: 0.5}}>
            <CardMedia sx={{ height: 140 }} image={product.thumbnail} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}€
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {
                addToCart(product.id);
                setCartProducts(cartProducts + 1);
              }}>
                Add to cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
}
