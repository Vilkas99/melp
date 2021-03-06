import React from "react";
import { Typography, Button, Row, Col } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const StyledContenedor = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg");
  background-size: cover;

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 100vh;
  width: 100vw;

  max-height: 100%;
  max-height: 100%;

  /**Paralaleja*/
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  z-index: 0;

  &:before {
    background: rgba(0, 0, 0, 0.6);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  @media screen and (min-width: 1200px) {
    justify-content: center;
  }
`;

const StyledTitle = styled(Title)`
  width: 100%;
  &.ant-typography {
    color: white;
    font-size: 5rem;
    margin: 0;
    @media screen and (min-width: 1200px) {
      justify-content: center;
      font-size: 15rem;
    }
  }
`;

const StyledButton = styled(Button)`
  max-width: 60vw;
  &.ant-typography {
    color: white;
  }
  @media screen and (min-width: 1200px) {
    max-width: 90vw;
    width: 20vw;
    height: 5vh;
    font-size: 1.6rem;
  }
`;

const Titulo = () => {
  return (
    <StyledButton
      type="primary"
      shape="round"
      onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
    >
      Seach restaurants
    </StyledButton>
  );
};

function Portada() {
  return (
    <>
      <StyledContenedor>
        <Row>
          <Col span={24} style={{ margin: "50px" }}>
            <StyledTitle>Melp</StyledTitle>
            <Titulo />
          </Col>
        </Row>
      </StyledContenedor>
    </>
  );
}

export default Portada;
