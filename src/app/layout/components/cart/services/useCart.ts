import { useEffect } from "react";
//@ts-ignore
import { useContextProvider } from "../../../../context/contextProvider.tsx";
// @ts-ignore
import { sendCartInfo } from "./cartServices.ts";
import swal from "sweetalert";

function useCart(product) {
  const { cart, setCart, session } = useContextProvider();

  useEffect(() => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("items") || "[]");
      if (cartItems) {
        setCart(cartItems);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setCart]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("items", JSON.stringify(cart));
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
    if (cart.length === 0) {
      localStorage.removeItem("items");
    }
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

  const buildDTO = () => {
    try {
      const dto: any = {
        orderItems: [],
      };
      let total = 0;
      cart.forEach((item) => {
        total += item.cantidad * item.discount;
        dto.orderItems.push({
          productName: item.name,
          price: item.price,
          discount: item.discount,
          quantity: item.cantidad,
          total: item.discount * item.cantidad,
          imageName: item.images[0].url,
        });
      });
      dto.total = total;
      dto.address = session.user.address;
      dto.userId = session.user.id;

      const res = sendCartInfo(dto, session.token);
      res.then((res) => {
        if (res.status === 200) {
          swal(
            "Compra realizada con exito",
            "Se ha enviado correctamente!",
            "success"
          );
          clearCart();
        } else {
          swal(
            "Error al realizar la compra",
            "Se ha presentado un error en el envio, intente nuevamente!",
            "error"
          );
        }
      });
    } catch (error) {
      swal(
        "Error al realizar la compra",
        "Debe iniciar sesion para realizar la compra!",
        "error"
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("items");
  };

  return { addToCart, removeFromCart, increase, decrease, buildDTO };
}

export default useCart;
