import React, { useEffect } from "react";
import { Layout, Row, Col } from "antd";

import Portada from "../../Components/Portada";
import Restaurantes from "../../Components/Restaurantes";
import Datos from "../../Components/Datos";
import useFetch from "../../Hooks/Fetch/useFetch";

function Home() {
  const { Header, Footer, Sider, Content } = Layout;
  const [doFetch] = useFetch();

  useEffect(() => {
    doFetch(
      "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json"
    );
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
