import React, { useEffect, useState } from "react";
import { Typography, Button, Card, Rate, Row, Col } from "antd";
import { std } from "mathjs";
import _ from "lodash";

const { Meta } = Card;
const { Title } = Typography;

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

const CardRecomendacion = ({ marcadores, rango }) => {
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
      {marcadoresFiltrados.map((elemento) => (
        <Meta key={elemento.id} title={elemento.name} />
      ))}
    </Card>
  );
};

function Estadistica({ marcadores, rango }) {
  const [promedio, setPromedio] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [desviacionStd, setDesviacion] = useState(0);

  const desviacionEstandar = (misRatings) => {
    if (misRatings.length >= 1) {
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
    <div>
      <Row>
        <Col span={24}>
          <CardEstadistica
            marcadores={marcadores}
            promedio={promedio}
            desviacionStd={desviacionStd}
          />
          <CardRecomendacion marcadores={marcadores} rango={rango} />
        </Col>
      </Row>
    </div>
  );
}

export default Estadistica;
