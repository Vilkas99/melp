import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Col, Row } from "antd";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const SocialMediaLink = ({ frase }) => {
  return (
    <Row>
      <FacebookShareButton url={"https://www.shapedivider.app/"} quote={frase}>
        <FacebookIcon round size={30} />
      </FacebookShareButton>
      <TwitterShareButton url={"https://www.shapedivider.app/"} via={frase}>
        <TwitterIcon round size={30} />
      </TwitterShareButton>
      <WhatsappShareButton url={"https://www.shapedivider.app/"} title={frase}>
        <WhatsappIcon round size={30} />
      </WhatsappShareButton>
    </Row>
  );
};

function MiModal({ visible, setModal, data }) {
  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const estiloMapa = {
    padding: "2rem",
    height: "100px",
  };

  let frase = `I've found ${data.name} in Melp! Go and visit it's website: ${data.contact.site}! `;

  return (
    <>
      <Modal
        title={data.name}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col>
            <h2>Contact</h2>
            <ul>
              <li>Email: {data.contact.email}</li>
              <li>Phone: {data.contact.phone}</li>
              <li>
                Site: <a href={data.contact.site}>{data.contact.site}</a>
              </li>
            </ul>
            <SocialMediaLink frase={frase} />
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default MiModal;
