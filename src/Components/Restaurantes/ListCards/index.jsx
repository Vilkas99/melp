import React from "react";
import CardInfo from "../Card/CardInfo";

const FilasCards = ({ dataArray, busqueda }) => {
  return (
    <div>
      {dataArray.map((data) => {
        if (busqueda != "") {
          if (data.name.toLowerCase().includes(busqueda.toLowerCase())) {
            return (
              <CardInfo
                key={data.id}
                id={data.id}
                name={data.name}
                address={data.address}
                rating={data.rating}
              />
            );
          }
        } else {
          return (
            <CardInfo
              key={data.id}
              id={data.id}
              name={data.name}
              address={data.address}
              rating={data.rating}
            />
          );
        }
      })}
    </div>
  );
};

export default FilasCards;
