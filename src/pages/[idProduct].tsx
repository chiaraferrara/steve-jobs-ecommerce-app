import { AppContext } from "@/ContextProvider";
import { Button, Div, FlexRow, Wrapper } from "@/styles/globals";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceProducts } from "../ContextProvider";


export default function ProductPage() {
  const router = useRouter();
  const { idProduct } = router.query;
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useContext(AppContext);
    // const {setCartProducts} = useContext(AppContext);
    // const { cartProducts } = useContext(AppContext);
  const dispatch = useDispatch();
  


 const onClickAddToCart = () => {
     dispatch(sliceProducts.actions.setCartProducts(1));
  };


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
                    onClickAddToCart();
                }}>Add To Cart</Button>
                </Wrapper>
        )}
        </Div>
    </>
);
}
