//@ts-ignore
import { useContextProvider } from "../../../../context/contextProvider.tsx";

function useCart(product) {
  const { cart, setCart } = useContextProvider();

  const addToCart = () => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, cantidad: exist.cantidad + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }

    // cart.findIndex((c) => c.id === product.id)
    //   ? setCart(cart.filter((c) => c.id !== product.id))
    //   : setCart((c) => [...cart, product]);
    // const newCart = [...cart, product];
    // setCart(newCart);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
  };

  const increase = () => {
    setCart(
      cart.map((x) =>
        x.id === product.id ? { ...x, cantidad: x.cantidad + 1 } : x
      )
    );
  };

  const decrease = () => {
    setCart(
      cart.map((x) =>
        x.id === product.id
          ? {
              ...x,
              cantidad: x.cantidad > 1 ? x.cantidad - 1 : 1,
            }
          : x
      )
    );
  };

  const addToCartText =
    cart.findIndex((c) => c.id === product.id) >= 0
      ? "Remove from cart"
      : "Add to cart";

  return { addToCart, addToCartText, removeFromCart, increase, decrease };
}

export default useCart;
