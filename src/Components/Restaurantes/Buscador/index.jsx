import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Row, Col, Input, Dropdown, Menu } from "antd";

const { Search } = Input;

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

const BuscarFiltrar = ({
  setBusqueda,
  setFiltro,
  filtro,
  setTipoOrden,
  tipoOrden,
}) => {
  return (
    <Row style={{ margin: "50px" }}>
      <Col>
        <Search
          placeholder="Fast fruit..."
          enterButton
          onChange={(e) => {
            setBusqueda(e.target.value);
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
  );
};

export default BuscarFiltrar;
