import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  Alert,
  Row,
  Col,
  Collapse,
  Rate,
} from "antd";
import { std } from "mathjs";
import _ from "lodash";
import { CaretRightOutlined } from "@ant-design/icons";
import Modal from "../../Modal";

const { Meta } = Card;
const { Title } = Typography;
const { Panel } = Collapse;

const CardEstadistica = ({ marcadores, promedio, desviacionStd }) => {
  return (
    <Card>
      <Meta
        title={<Title level={4}>Statistics</Title>}
        description={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ul>
              <li>Total: {marcadores.length}</li>
              <li>Average of rating: {promedio}</li>
              <li>Standar Deviation: {desviacionStd}</li>
            </ul>
          </div>
        }
      />
    </Card>
  );
};

const TarjetaRestaurante = ({ elemento }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Panel
      header={
        <Col>
          <h3>{elemento.name}</h3>
          <Rate defaultValue={elemento.rating} disabled count={4}></Rate>
        </Col>
      }
      key={elemento.id}
    >
      <ul>
        <li>Street: {elemento.address.street}</li>
        <li>City: {elemento.address.city}</li>
        <li>State: {elemento.address.State}</li>
      </ul>

      <Button>Show more...</Button>
      <Modal visible={visible} setModal={setVisible} data={elemento} />
    </Panel>
  );
};

const CardRecomendacion = ({ marcadores, rango }) => {
  const [visible, setVisible] = useState(false);
  const [marcadoresFiltrados, setMarcadoresFiltrados] = useState([]);
  useEffect(() => {
    let misMarcadores = _.filter(
      marcadores,
      (elemento) => elemento.rating >= rango[0] && elemento.rating <= rango[1]
    );
    console.log(`Filtrando por ${rango} a :${misMarcadores} `);
    setMarcadoresFiltrados(misMarcadores);
  }, [marcadores, rango]);

  return (
    <Card>
      <Collapse>
        {marcadoresFiltrados.map((elemento) => (
          <>
            <Panel
              header={
                <Col>
                  <h3>{elemento.name}</h3>
                  <Rate
                    defaultValue={elemento.rating}
                    disabled
                    count={4}
                  ></Rate>
                </Col>
              }
              key={elemento.id}
            >
              <ul>
                <li>Street: {elemento.address.street}</li>
                <li>City: {elemento.address.city}</li>
                <li>State: {elemento.address.state}</li>
              </ul>

              <Button onClick={() => setVisible(!visible)}>Show more...</Button>
              <Modal visible={visible} setModal={setVisible} data={elemento} />
            </Panel>
          </>
        ))}
      </Collapse>
    </Card>
  );
};

function Estadistica({ marcadores, rango, data }) {
  const [promedio, setPromedio] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [desviacionStd, setDesviacion] = useState(0);

  const desviacionEstandar = (misRatings) => {
    if (misRatings.length > 1) {
      console.log("Mis ratings: ", misRatings);
      setDesviacion(std(misRatings));
    } else {
      console.log("No hay ratings para la STD");
    }
  };

  const obtenerPromedio = () => {
    let miPromedio = 0;
    let misRatings = [];
    marcadores.forEach((element) => {
      miPromedio += element?.rating;
      misRatings.push(element?.rating);
    });
    miPromedio = miPromedio / marcadores?.length;
    setPromedio(miPromedio);
    setRatings(misRatings);
    desviacionEstandar(misRatings);
    console.log("Obtuvimos el promedio: ", miPromedio);
  };

  useEffect(() => {
    if (marcadores.length >= 1) {
      console.log("Estamos calculando: ", marcadores);
      obtenerPromedio();
    } else {
      console.log("No hay suficientes datos");
      setPromedio(0);
      setDesviacion(0);
    }
  }, [marcadores]);

  return (
    <Row gutter={{ xs: 12 }}>
      <Col xs={24} m={12} flex="auto">
        <CardEstadistica
          marcadores={marcadores}
          promedio={promedio}
          desviacionStd={desviacionStd}
        />
        <CardRecomendacion marcadores={marcadores} rango={rango} data={data} />
      </Col>
    </Row>
  );
}

export default Estadistica;
