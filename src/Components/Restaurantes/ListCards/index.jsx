import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import CardInfo from "../Card/CardInfo";

const StyledRow = styled(Row)`
  margin: 15px;
  @media screen and (min-width: 1200px) {
    margin-left: 50px;
  }
`;

const FilasCards = ({ dataArray, busqueda }) => {
  return (
    <StyledRow type="flex" align="middle" justify="center">
      {dataArray.map((data) => {
        if (busqueda != "") {
          if (data.name.toLowerCase().includes(busqueda.toLowerCase())) {
            return (
              <Col xs={24} lg={8} flex="900px">
                <CardInfo
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  address={data.address}
                  rating={data.rating}
                  data={data}
                />
              </Col>
            );
          }
        } else {
          return (
            <Col xs={24} lg={8} flex="900px">
              <CardInfo
                key={data.id}
                id={data.id}
                name={data.name}
                address={data.address}
                rating={data.rating}
                data={data}
              />
            </Col>
          );
        }
      })}
    </StyledRow>
  );
};

export default FilasCards;
