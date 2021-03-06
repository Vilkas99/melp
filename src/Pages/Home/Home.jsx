import React from "react";
import { Layout, Row, Col } from "antd";

import Portada from "../../Components/Portada";
import Restaurantes from "../../Components/Restaurantes";
import Datos from "../../Components/Datos";

function Home() {
  const { Header, Footer, Sider, Content } = Layout;

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
