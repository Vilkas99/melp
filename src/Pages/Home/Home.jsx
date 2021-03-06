import React, { useEffect } from "react";
import { Layout, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { newState } from "../../Utils/Redux/Features/Restaurantes/restaurantesSlice";
import Portada from "../../Components/Portada";
import Restaurantes from "../../Components/Restaurantes";
import Datos from "../../Components/Datos";

import axios from "axios";

function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  const dispatch = useDispatch();

  let config = {
    headers: {
      "Access-Control-Allow-Origin": "https://vilkas99.github.io/melp/",
      "Access-Control-Allow-Origin": true,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://api-melb.herokuapp.com/getData", config)
          .then((respuesta) => {
            console.log("NUESTRO DATOS FINALES: ", respuesta);
            dispatch(newState(respuesta.data));
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Content>
        <Portada />
        <Restaurantes />
        <Datos />
      </Content>
    </Layout>
  );
}

export default Home;
