import React, { useState } from "react";

import { Typography } from "antd";
import CardInfoMapa from "../../../Components/Restaurantes/Card/CardInfoMapa";
import { Marker, InfoWindow } from "@react-google-maps/api";

const MiMarcador = ({ location, data }) => {
  const [info, setInfo] = useState(false);

  return (
    <>
      <Marker position={location} label="R" onClick={() => setInfo(!info)} />
      {info && (
        <InfoWindow position={location}>
          <CardInfoMapa data={data} />
        </InfoWindow>
      )}
    </>
  );
};

export default MiMarcador;
