import React from "react";
import { Carousel } from "antd";

import FilasCards from "../ListCards";

const MiCarousel = ({ pedazosData, busqueda, filtro }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carousel effect="fade">
        {console.log(pedazosData)}
        {pedazosData.map((dataArray) => {
          return (
            <FilasCards
              dataArray={dataArray}
              busqueda={busqueda}
              filtro={filtro}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default MiCarousel;
