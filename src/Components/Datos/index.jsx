import React from "react";
import { Typography, Button, Card, Rate } from "antd";
import MiMapa from "../../Utils/Maps";
import FakeData from "../../data/restaurants_initial";

function Datos() {
  const estiloMapa = {
    padding: "2rem",
    height: "400px",
  };
  return (
    <div>
      <MiMapa MiData={FakeData} estilo={estiloMapa} />
    </div>
  );
}

export default Datos;
