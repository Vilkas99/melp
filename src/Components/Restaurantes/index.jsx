import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { selectValores } from "../../Utils/Redux/Features/Restaurantes/restaurantesSlice";

import BuscarFiltrar from "./Buscador";
import MiCarousel from "./Carousel";

const Elementos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");
  const [tipoOrden, setTipoOrden] = useState("desc");
  const datosFinales = useSelector(selectValores);

  let pedazosData = _.chunk(datosFinales, 3);
  if (filtro == "alphabet") {
    let organizados = _.orderBy(
      datosFinales,
      [(data) => data.name.toLocaleLowerCase()],
      [tipoOrden]
    );
    pedazosData = _.chunk(organizados, 3);
  } else if (filtro == "rating") {
    let organizados = _.orderBy(
      datosFinales,
      [(data) => data.rating],
      [tipoOrden]
    );
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
