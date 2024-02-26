import { ReactNode, createContext, useEffect, useState } from "react";
import { Cart, Product, TContext } from "./declarations";
import { useRouter } from "next/router";

export const AppContext = createContext<TContext>({
  cart: [],
  setCart: () => {},
  paid: false,
  products: null,
  cartProducts: 0,
  setCartProducts: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  reduceQuantity: () => {},
  increaseQuantity: () => {},
  getTotalPrice: () => 0,
  pay: () => {},
  done: () => {},
  getProductQuantity: () => 0,
  loading: false,
  error: "",
});

interface Props {
  children: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [cart, setCart] = useState<TContext["cart"]>([]);
  const [paid, setPaid] = useState<TContext["paid"]>(false);
  const [products, setProducts] = useState<TContext["products"]>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [cartProducts, setCartProducts] = useState<number>(0);

  const addToCart = (idProduct: Product["id"]) => {
    const found = cart.find((el) => el.id === idProduct);
    const product = products?.find((el) => el.id === idProduct);
    if (!!found) {
      const newCart = cart.map((el) => {
        if (el.id !== idProduct) return el;
        return {
          id: el.id,
          quantity: el.quantity + 1,
          description: product?.description ?? "",
          thumbnail: product?.thumbnail ?? "",
          price: product?.price ?? 0,
        };
      });
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          id: idProduct,
          quantity: 1,
          description: product?.description ?? "",
          thumbnail: product?.thumbnail ?? "",
          price: product?.price ?? 0,
        },
      ]);
    }
  };

  const removeFromCart = (idProduct: Product["id"]) => {
    const newCart = cart.filter((el) => el.id !== idProduct);
    setCart(newCart);
  };

  const reduceQuantity = (idProduct: Product["id"]) => {
    const newCart = cart.reduce((acc, el) => {
      if (el.id === idProduct) {
        if (el.quantity > 1) {
          acc.push({
            id: el.id,
            quantity: el.quantity - 1,
            description: el.description,
            thumbnail: el.thumbnail,
            price: el.price,
          });
          return acc;
        }
        return acc;
      } else {
        acc.push(el);
        return acc;
      }
    }, [] as Cart);
    setCart(newCart);
  };


  const increaseQuantity = (idProduct: Product["id"]) => {
    const newCart = cart.map((el) => {
      if (el.id === idProduct) {
        return {
          id: el.id,
          quantity: el.quantity + 1,
          description: el.description,
          thumbnail: el.thumbnail,
          price: el.price,
        };
      }
      return el;
    });
    setCart(newCart);
  };

  const router = useRouter();


  const navigateToSuccess = () => {
    router.push('/success');
};


  const pay = () => {
    navigateToSuccess();
    setPaid(true);
    // setCart([]);
    
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://mockend.up.railway.app/api/products"
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const done = () => {
    setPaid(false);
  };

  

  const getProductQuantity = (idProduct: Product["id"]) => {
    const found = cart.find((el) => el.id === idProduct);
    const product = products?.find((el) => el.id === idProduct);
    if (found) {
      return (product?.qty ?? 0) - found.quantity;
    } 
    if (!!product) {
      return product.qty ?? 0;
    }
    return 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        paid,
        products,
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        reduceQuantity,
        increaseQuantity,
        getProductQuantity,
        getTotalPrice,
        pay,
        loading,
        error,
        done,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
