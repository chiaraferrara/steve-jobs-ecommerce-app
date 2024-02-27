export type Cart = Array<{
  id: number;
  name: string;
  quantity: number;
  description: string;
  background_image: string;
  price: number;
  
}>;


// export type Cart = Array<Product>;
export interface Product {
  name: string;  
  background_image: string;
  description: string;
  id: number;
  released: number;
  rating: string;
  thumbnail: string;
  quantity: number;
  price: number;
}

export interface TContext {
  cart: Cart;
  setCart: (value: Cart) => void;
  paid: boolean;
  products: Array<Product> | null;
  cartProducts : number;
  setCartProducts: (value: number) => void;
  loading: boolean;
  error: string;
  addToCart: (idProduct: Product["id"]) => void;
  removeFromCart: (idProduct: Product["id"]) => void;
  reduceQuantity: (idProduct: Product["id"]) => void;
  increaseQuantity: (idProduct: Product["id"]) => void;
  getTotalPrice: () => number;
  pay: () => void;
  done: () => void;
  // getProductQuantity: (idProduct: Product["id"]) => number;
}
