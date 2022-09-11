import { useEffect } from "react";
//@ts-ignore
import { useContextProvider } from "../../../../context/contextProvider.tsx";
// @ts-ignore
import { sendCartInfo } from "./cartServices.ts";

function useCart(product) {
  const { cart, setCart } = useContextProvider();

  useEffect(() => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("items") || "[]");
      if (cartItems) {
        setCart(cartItems);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

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
    dto.address = "Calle 1 # 2 - 3";
    dto.userId = 'a66de13d-c13f-4700-b489-7c27244addee';
    // id del usuario carlos
    // dto.userId = 'ad4d41d2-085d-4da7-acaf-af4af4f52f86';
    // id del usuario juan
    // dto.userId = '26d9be06-fa3c-47d0-a868-aec6e1f0a1d7';
    
    const res = sendCartInfo(dto);
    processResponse(res);

  };

  const processResponse = (res) => {
    if(res.status === '405') {
      alert("No se pudo procesar la orden");
    } else {
      alert("Orden procesada con éxito");
      clearCart();
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("items");
  };

  return { addToCart, removeFromCart, increase, decrease, buildDTO };
}

export default useCart;
