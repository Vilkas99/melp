import React, { useState, useEffect } from "react";
import { computeDistanceBetween } from "spherical-geometry-js";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import { Row, Col } from "antd";

import MiMarcador from "./Marcador";
import Opciones from "./Opciones";
import Estadistica from "../../Components/Data_Maps/Estadistica";
import { identity } from "lodash";

function MiMapa({ restaurant, MiData, estilo }) {
  const [posMarcador, setPosMarcador] = useState(null);
  const [mostrarMarcador, setMostar] = useState(false);
  const [radio, setRadio] = useState(3000);
  const [rating, setRating] = useState([1, 4]);
  const [marcadoresEncontados, setMarcadoresEncontrados] = useState([]);
  const [centralPos, setCentralPos] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  useEffect(() => {
    !restaurant &&
      navigator.geolocation.getCurrentPosition((pos) => {
        setCentralPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
  }, []);

  const crearMarcador = (e) => {
    let estado = [];
    setPosMarcador(e.latLng);
    setMostar(true);
    MiData.map((data) => {
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
    <Row style={{ margin: "20px" }}>
      <Col xl={12} flex="auto" style={{ padding: "2rem" }}>
        <LoadScript googleMapsApiKey="AIzaSyChAKNN_dBGE-2OKMP9ljjMHv3784CRvO8">
          <GoogleMap
            mapContainerStyle={estilo}
            center={centralPos}
            zoom={10}
            onClick={(e) => crearMarcador(e)}
          >
            {MiData &&
              MiData.map((data, index) => (
                <MiMarcador
                  key={index}
                  location={data?.address.Location}
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
          <Opciones
            setRadio={setRadio}
            setRating={setRating}
            style={{ margin: "20px" }}
          />
        </LoadScript>
      </Col>
      <Col xl={12} flex="1024px" style={{ padding: "2rem" }}>
        <Estadistica marcadores={marcadoresEncontados} rango={rating} />
      </Col>
    </Row>
  );
}

export default React.memo(MiMapa);
