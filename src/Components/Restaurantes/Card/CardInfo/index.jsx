import React from "react";
import { Typography, Button, Card, Rate } from "antd";
const { Meta } = Card;
const { Title } = Typography;

const CardInfo = ({ name, address, rating }) => {
  return (
    <Card
      hoverable
      style={{ width: "90vw", height: "20vh", marginBottom: "60vh" }}
      cover={
        <img
          alt="example"
          src="https://media-cdn.tripadvisor.com/media/photo-s/12/51/77/a2/intro-restaurant-plaza.jpg"
        />
      }
    >
      <Meta
        title={<Title level={4}>{name}</Title>}
        description={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ul>
              <li>Street: {address?.street}</li>
              <li>City: {address?.city}</li>
              <li>State: {address?.State}</li>
            </ul>
            <Rate disabled defaultValue={rating} />
            <Button>Show more...</Button>
          </div>
        }
      />
    </Card>
  );
};

export default CardInfo;
