import { GetOrders } from "./services/orderServices";
// @ts-ignore
import { useContextProvider } from "../../context/contextProvider.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import Layout from "../../layout/Layout.tsx";
// @ts-ignore
import OrderByUser from "./components/OrderByUser.tsx";

const Order = () => {
  const { session } = useContextProvider();
  const navigate = useNavigate();
  const [token] = React.useState(session.token);
  const [orders, setOrders] = React.useState([]);

  const getOrders = () => {
    if (JSON.stringify(session) !== '{}') {
      const email = {
        email: session.user.email,
      }
      const dataLogin = GetOrders(token, email);
      dataLogin.then((res) => {
        if (res) {
          setOrders(res);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  };

  React.useEffect(() => {
    getOrders();
  }, [token]);
  return (
    <Layout>
      <OrderByUser orders={orders} />
    </Layout>
  );
};

export default Order;
