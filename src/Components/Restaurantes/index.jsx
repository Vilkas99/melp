import React, { useState } from "react";
import _ from "lodash";
import FakeData from "../../data/restaurants_initial";

import BuscarFiltrar from "./Buscador";
import MiCarousel from "./Carousel";
import styled from "styled-components";

const Elementos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");
  const [tipoOrden, setTipoOrden] = useState("desc");

  let pedazosData = _.chunk(FakeData, 3);
  if (filtro == "alphabet") {
    let organizados = _.orderBy(
      FakeData,
      [(data) => data.name.toLocaleLowerCase()],
      [tipoOrden]
    );
    pedazosData = _.chunk(organizados, 3);
  } else if (filtro == "rating") {
    let organizados = _.orderBy(FakeData, [(data) => data.rating], [tipoOrden]);
    pedazosData = _.chunk(organizados, 3);
  }
  return (
    <div
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BuscarFiltrar
        setBusqueda={setBusqueda}
        setFiltro={setFiltro}
        filtro={filtro}
        setTipoOrden={setTipoOrden}
        tipoOrden={tipoOrden}
      />
      <MiCarousel
        pedazosData={pedazosData}
        busqueda={busqueda}
        filtro={filtro}
      />
    </div>
  );
};

function Restaurantes() {
  return <Elementos />;
}

export default Restaurantes;
