import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import FakeData from "../../data/restaurants_initial";
import CardInfo from "../../Components/Restaurantes/Card";

const containerStyle = {
  width: "100vw",
  height: "400px",
};

//TODO: Change to user location
const center = {
  lat: -3.745,
  lng: -38.523,
};

const MiMarcador = ({ location, data }) => {
  const [info, setInfo] = useState(false);

  return (
    <>
      <Marker position={location} label="R" onClick={() => setInfo(!info)} />
      {info && (
        <InfoWindow position={location}>
          <CardInfo
            name={data.name}
            address={data.address}
            rating={data.rating}
          />
        </InfoWindow>
      )}
    </>
  );
};

function MiMapa() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyChAKNN_dBGE-2OKMP9ljjMHv3784CRvO8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {FakeData.map((data) => (
          <MiMarcador location={data.address.Location} data={data} />
        ))}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MiMapa);
