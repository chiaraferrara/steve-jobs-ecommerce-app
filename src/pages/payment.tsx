import { AppContext } from "@/ContextProvider";
import { Btn, Button } from "@/styles/globals";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Payment (){
    const {cart} = useContext(AppContext);
    const {getTotalPrice} = useContext(AppContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const router = useRouter();

    const navigateToCart = () => {
        router.push('/cart');
    };
    
    useEffect(() => {setTotalPrice(getTotalPrice())}, [cart]);

    if (cart.length < 1) return( <h1>Cart is empty</h1>)
    return (<>
        <h1>You want to proceed?</h1> 
        <p> You're going to pay {totalPrice}€</p>

        <p>Order list:</p>
        <ul>
            {cart.map(el => <li key={el.id}>{el.quantity}x {el.description}</li>)}
        </ul>

        <Button onClick={() => navigateToCart()}> Go back to cart to edit order</Button>
        <Btn>BUY</Btn>
</>
    )
}