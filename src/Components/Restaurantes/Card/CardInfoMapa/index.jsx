import React, { useState } from "react";
import { Typography, Button, Card, Rate } from "antd";
import Modal from "../../../Modal";

const { Meta } = Card;
const { Title } = Typography;

const CardInfoMapa = ({ data }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Card
      style={{ width: "150px" }}
      cover={
        <img
          alt="example"
          src="https://media-cdn.tripadvisor.com/media/photo-s/12/51/77/a2/intro-restaurant-plaza.jpg"
        />
      }
    >
      <Meta
        title={<Title level={4}>{data.name}</Title>}
        description={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Rate
              style={{ fontSize: 12 }}
              disabled
              defaultValue={data.rating}
            />
            <Button onClick={() => setVisible(!visible)}>Show more...</Button>
            <Modal visible={visible} setModal={setVisible} data={data} />
          </div>
        }
      />
    </Card>
  );
};

export default CardInfoMapa;
