//@ts-ignore
import { CartContext } from "../../../../context/cartContext.tsx";



function useCart(product) {

  const { cart, setCart } = CartContext();

  const addToCart = () => {
    cart.findIndex( c => c.id !== product.id) === -1 ? setCart([...cart, product]) : setCart(cart);
    const newCart = [...cart, product];
    setCart(newCart);
  }

}