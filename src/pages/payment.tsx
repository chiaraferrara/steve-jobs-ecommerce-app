import { AppContext } from "@/ContextProvider";
import { Btn, Button, Div, FlexColumn, Wrapper} from "@/styles/globals";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Divider from '@mui/material/Divider';

export default function Payment (){
    const {cart} = useContext(AppContext);
    const {getTotalPrice} = useContext(AppContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const {pay} = useContext(AppContext);
    const {setCartProducts} = useContext(AppContext);
    const router = useRouter();
    

    const navigateToCart = () => {
        router.push('/cart');
    };

    const navigateToSuccess = () => {
        router.push('/success');
    };
    
    useEffect(() => {setTotalPrice(getTotalPrice())}, [cart]);

    if (cart.length < 1) return( <h1>Cart is empty</h1>)
    return (<>
    <Div>
    <Wrapper>
    <Card>
    <Typography><h1>You want to proceed?</h1>  </Typography>
    

        <p>Order list:</p>
        <ul>
            {cart.map(el => <li key={el.id}>{el.quantity}x {el.description}<Divider /></li>)}
        </ul>

        <Button onClick={() => navigateToCart()}> Go back to cart to edit order</Button>
        <Chip label={`You are going to pay ${totalPrice}€`} />
        
        <Chip label={`BUY`} onClick={() =>{pay() ;
        setCartProducts(0);
        navigateToSuccess()}}/>
        </Card></Wrapper></Div>
</>
    )
}