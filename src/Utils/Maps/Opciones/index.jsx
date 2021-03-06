import React from "react";
import { Slider, Row, Col, Typography } from "antd";

const { Title } = Typography;

const Opciones = ({ setRadio, setRating }) => {
  return (
    <>
      <Row>
        <Col span={16}>
          <Title level={3}>Select Radius</Title>
          <Slider
            defaultValue={30000}
            onChange={(value) => setRadio(value)}
            min={30000}
            max={1000000}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={3}>Select Rating</Title>
          <Slider
            range
            defaultValue={[1, 4]}
            onChange={(value) => setRating(value)}
            min={1}
            max={4}
          />
        </Col>
      </Row>
    </>
  );
};

export default Opciones;
