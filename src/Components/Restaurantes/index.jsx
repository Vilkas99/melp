import React, { useState } from "react";
import styled from "styled-components";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import _, { map } from "lodash";
import {
  Typography,
  Button,
  Row,
  Col,
  Input,
  Card,
  Rate,
  Carousel,
  Dropdown,
  Menu,
} from "antd";

const { Search } = Input;
const { Meta } = Card;
const { Title } = Typography;

const FakeData = [
  {
    id: 12121212,
    name: "Tortas Lalo",
    contacto: {
      site: "www.tortasLalo",
      emal: "victorium99@hotmail.com",
      phone: "2221757251",
    },
    address: {
      street: "1ra Cda Real de la Hacienda",
      city: "Puebla",
      State: "Puebla",
      Location: {
        lat: 12,
        long: 35,
      },
    },
    rating: 3,
  },
  {
    id: 12121213,
    name: "Tacos Pepé",
    contacto: {
      site: "www.tacosPepe",
      emal: "victorium99@hotmail.com",
      phone: "2221757251",
    },
    address: {
      street: "1ra Cda Real de la Hacienda",
      city: "Puebla",
      State: "Puebla",
      Location: {
        lat: 12,
        long: 35,
      },
    },
    rating: 4,
  },
  {
    id: 12121214,
    name: "La Oriental",
    contacto: {
      site: "www.laOriental",
      emal: "victorium99@hotmail.com",
      phone: "2221757251",
    },
    address: {
      street: "1ra Cda Real de la Hacienda",
      city: "Puebla",
      State: "Puebla",
      Location: {
        lat: 12,
        long: 35,
      },
    },
    rating: 1,
  },
  {
    id: 12121215,
    name: "Zon Pastor",
    contacto: {
      site: "www.laOriental",
      emal: "victorium99@hotmail.com",
      phone: "2221757251",
    },
    address: {
      street: "1ra Cda Real de la Hacienda",
      city: "Puebla",
      State: "Puebla",
      Location: {
        lat: 12,
        long: 35,
      },
    },
    rating: 1,
  },
];

const CardRestaurante = ({ name, address, rating }) => {
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

const FilasCards = ({ dataArray, busqueda }) => {
  return (
    <div>
      {dataArray.map((data) => {
        if (busqueda != "") {
          if (data.name.toLowerCase().includes(busqueda.toLowerCase())) {
            return (
              <CardRestaurante
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
            <CardRestaurante
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

const MiDropdown = ({ setFiltro, options, title, value }) => {
  const menu = (
    <Menu>
      {options.map((option, index) => (
        <Menu.Item
          key={index}
          icon={<UserOutlined />}
          onClick={() => {
            setFiltro(option.toLocaleLowerCase());
            console.log(option);
          }}
        >
          {option}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        {value != "" ? value : title} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

function Restaurantes() {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");
  const [tipoOrden, setTipoOrden] = useState("desc");

  let pedazosData = _.chunk(FakeData, 3);
  if (filtro == "alphabet") {
    let organizados = _.orderBy(
      FakeData,
      [(data) => data.name.toLocaleLowerCase()],
      [tipoOrden]
    );
    pedazosData = _.chunk(organizados, 3);
  } else if (filtro == "rating") {
    let organizados = _.orderBy(FakeData, [(data) => data.rating], [tipoOrden]);
    pedazosData = _.chunk(organizados, 3);
  }

  return (
    <div
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
        margin: "15px",
      }}
    >
      <Row style={{ margin: "50px" }}>
        <Col>
          <Search
            placeholder="Fast fruit..."
            enterButton
            onChange={(e) => {
              setBusqueda(e.target.value);
              console.log(busqueda);
            }}
          />
          <MiDropdown
            setFiltro={setFiltro}
            options={["Alphabet", "Rating"]}
            title="Filter"
            value={filtro}
          />
          <MiDropdown
            setFiltro={setTipoOrden}
            options={["Asc", "Desc"]}
            title="by..."
            value={tipoOrden}
          />
        </Col>
      </Row>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Carousel effect="fade">
          {console.log(pedazosData)}
          {pedazosData.map((dataArray) => {
            return (
              <FilasCards
                dataArray={dataArray}
                busqueda={busqueda}
                filtro={filtro}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Restaurantes;
