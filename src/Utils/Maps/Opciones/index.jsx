import React from "react";
import { Slider, Row, Col, Typography, Card } from "antd";
const { Title } = Typography;

const MiSlider = ({ setRadio, defaultValue, range, title, multiple }) => {
  return (
    <Col>
      <Title level={5}>{title}</Title>
      <Slider
        range={multiple}
        defaultValue={defaultValue}
        onChange={(value) => setRadio(value)}
        min={range[0]}
        max={range[1]}
      />
    </Col>
  );
};

const Opciones = ({ setRadio, setRating }) => {
  return (
    <div style={{ marginTop: "25px" }}>
      <Card>
        <Row>
          <Col span={24}>
            <MiSlider
              setRadio={setRadio}
              defaultValue={30000}
              range={[300, 1000]}
              title={"Select Radius"}
            />
            <MiSlider
              setRadio={setRating}
              defaultValue={[1, 4]}
              range={[1, 4]}
              title={"Select Rating"}
              multiple
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Opciones;
