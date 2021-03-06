import React, { useState, useEffect } from "react";
import { computeDistanceBetween } from "spherical-geometry-js";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import FakeData from "../../data/restaurants_initial";

import MiMarcador from "./Marcador";
import Opciones from "./Opciones";
import Estadistica from "../../Components/Data_Maps/Estadistica";

function MiMapa() {
  const [posMarcador, setPosMarcador] = useState(null);
  const [mostrarMarcador, setMostar] = useState(false);
  const [radio, setRadio] = useState(3000);
  const [rating, setRating] = useState([]);
  const [marcadoresEncontados, setMarcadoresEncontrados] = useState([]);
  const [userPos, setUserPos] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const estiloContenedor = {
    width: "100vw",
    height: "400px",
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  const crearMarcador = (e) => {
    let estado = [];
    setPosMarcador(e.latLng);
    setMostar(true);
    FakeData.map((data) => {
      let distancia = Math.ceil(
        computeDistanceBetween(e.latLng, data.address.Location)
      );
      if (distancia < radio) {
        estado.push(data);
      }
    });
    setMarcadoresEncontrados(estado);
    console.log("Mis marcadores: ", marcadoresEncontados);
  };

  const circulo_Opciones = {
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: radio,
    zIndex: 1,
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyChAKNN_dBGE-2OKMP9ljjMHv3784CRvO8">
        <GoogleMap
          mapContainerStyle={estiloContenedor}
          center={userPos}
          zoom={10}
          onClick={(e) => crearMarcador(e)}
        >
          {FakeData.map((data, index) => (
            <MiMarcador
              key={index}
              location={data.address.Location}
              data={data}
            />
          ))}
          {mostrarMarcador && (
            <Marker
              position={posMarcador}
              icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            />
          )}
          {mostrarMarcador && (
            <Circle center={posMarcador} options={circulo_Opciones} />
          )}
          <></>
        </GoogleMap>
      </LoadScript>
      <Opciones setRadio={setRadio} setRating={setRating} />
      <Estadistica marcadores={marcadoresEncontados} rango={rating} />
    </>
  );
}

export default React.memo(MiMapa);
