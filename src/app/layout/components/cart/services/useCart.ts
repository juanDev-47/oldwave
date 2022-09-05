import { useEffect } from "react";
//@ts-ignore
import { useContextProvider } from "../../../../context/contextProvider.tsx";

function useCart(product) {
  const { cart, setCart } = useContextProvider();

  useEffect(() => {
    if(cart?.length > 0) {
      localStorage.setItem('items', JSON.stringify(cart));
    }
  }, [cart]);

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
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
  };

  const increase = (item) => {
    setCart(
      cart.map((x) =>
        x.id === item.id ? { ...x, cantidad: x.cantidad + 1 } : x
      )
    );
  };

  const decrease = (item) => {
    setCart(
      cart.map((x) =>
        x.id === item.id
          ? {
              ...x,
              cantidad: x.cantidad > 1 ? x.cantidad - 1 : 1,
            }
          : x
      )
    );
  };

  return { addToCart, removeFromCart, increase, decrease };
}

export default useCart;
