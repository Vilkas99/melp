import React, { useState } from "react";
import { Typography, Button, Card, Rate } from "antd";
import styled from "styled-components";
import MiModal from "../../../Modal";
const { Meta } = Card;
const { Title } = Typography;

const StyledCard = styled(Card)`
  width: 90vw;
  height: 80vh;
  margin-bottom: 50px;

  @media screen and (min-width: 700px) {
    margin-left: 15vw;
    width: 65vw;
    height: 80vh;
    margin-right: 40px;
  }

  @media screen and (min-width: 900px) {
    width: 25vw;
    height: 60vh;
    margin-right: 40px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 30px;
    width: 25vw;
    height: 70vh;
  }
`;

const CardInfo = ({ name, address, rating, data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <StyledCard
      hoverable
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
            <Button onClick={() => showModal(true)}>Show more...</Button>
            <MiModal
              visible={isModalVisible}
              setModal={setIsModalVisible}
              data={data}
            />
          </div>
        }
      />
    </StyledCard>
  );
};

export default CardInfo;
