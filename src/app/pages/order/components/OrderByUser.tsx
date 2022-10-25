import {
  Grid,
  Typography,
  Box,
  styled,
} from "@mui/material";
import React from "react";
import { GetOrders } from "../services/orderServices";
import swal from "sweetalert";
// @ts-ignore
import { useContextProvider } from "../../../context/contextProvider.tsx";
import { useNavigate } from "react-router-dom";

const StyledTypography = styled(Typography)`
  font-size: 14px;
  padding-top: 10px;
  width: 100%;
  text-align: left;
  ${(props) => props.theme.breakpoints.up("xs")} {
    font-size: 16px;
  }
`;


const OrderByUser = () => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState("");
  const [orders, setOrders] = React.useState([]);

  const { session } = useContextProvider();

  React.useEffect(() => {
    setToken(session.token);
    const dataLogin = GetOrders(token);
    dataLogin.then((res) => {
      console.log(res);
      if (res) {
        setOrders(res);
        swal(`respuesta`, "success");
      } else {
        swal(`respuesta`, "error");
        navigate("/");
      }
    });
  }, [token, session.token, navigate]);



  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledTypography variant="h5">
          <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
            Mis pedidos
          </Box>
        </StyledTypography>
      </Grid>
      <Grid item xs={12}>
        <StyledTypography variant="h5">
          <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
            {orders.map((order) => (
              <div key={order.id}>
                <p>{order.orderId}</p>
                <p>{order.orderItems[0].productName}</p>
                <p>{order.orderItems[0].discount}</p>
                <p>{order.orderItems[0].quantity}</p>
              </div>
            ))}
          </Box>
        </StyledTypography>
      </Grid>
    </Grid>
  );
}

export default OrderByUser;
