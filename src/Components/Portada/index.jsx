import React from "react";
import { Typography, Button, Row, Col } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const StyledContenedor = styled.div`
  background-image: url("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png");
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
`;

const StyledTitle = styled(Title)`
  width: 100%;
  &.ant-typography {
    color: white;
    font-size: 90px;
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  max-width: 60vw;
  &.ant-typography {
    color: white;
  }
`;

const Titulo = () => {
  return (
    <StyledButton type="primary" shape="round">
      Seach restaurants
    </StyledButton>
  );
};

function Portada() {
  return (
    <StyledContenedor>
      <Row>
        <Col span={16} style={{ margin: "50px" }}>
          <StyledTitle>Melp</StyledTitle>
          <Titulo />
        </Col>
      </Row>
    </StyledContenedor>
  );
}

export default Portada;
