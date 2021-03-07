import React from "react";
import { Typography, Button, Card, Rate } from "antd";
import MiMapa from "../../Utils/Maps";

function Datos() {
  const estiloMapa = {
    padding: "2rem",
    height: "400px",
  };
  return (
    <div>
      <MiMapa estilo={estiloMapa} />
    </div>
  );
}

export default Datos;
