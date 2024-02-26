import { AppContext } from "@/ContextProvider";
import { Button, Div, FlexRow, Wrapper } from "@/styles/globals";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const { idProduct } = router.query;
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useContext(AppContext);
    const {setCartProducts} = useContext(AppContext);
    const { cartProducts } = useContext(AppContext);
  useEffect(() => {
    if (idProduct) {
      getProductDetails();
    }
  }, [idProduct]);


  const getProductDetails = async () => {
    const response = await fetch(
      `https://mockend.up.railway.app/api/products/${idProduct}`
    );
    const data = await response.json();
    setProduct(data);
  };

  if(!product) { return <Div><h1>Loading...</h1></Div> }
return (
    <>
    <Div>
        <h1>Product Details</h1>
        {product &&  (
                <Wrapper>
                        <h2>{product.title}</h2>
                        <FlexRow>
                        <img src={product.thumbnail} alt={product.title} />
                        <p>{product.description} <br/>
                        Price: {product.price} €</p>
                        <p></p>
                        
                </FlexRow>
                <Button onClick={() => {
                    addToCart(product.id);
                    setCartProducts(cartProducts + 1);
                }}>Add To Cart</Button>
                </Wrapper>
        )}
        </Div>
    </>
);
}
