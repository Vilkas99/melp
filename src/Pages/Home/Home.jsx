import React from "react";
import { Layout, Row, Col } from "antd";
import Portada from "../../Components/Portada";
import Restaurantes from "../../Components/Restaurantes";

function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <Content>
        <Portada />
        <Restaurantes />
      </Content>
    </Layout>
  );
}

export default Home;
