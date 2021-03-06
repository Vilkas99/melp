import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch() {
  const [cargado, setCargado] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState(
    "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json"
  );

  let config = {
    headers: {
      "Access-Control-Allow-Origin": "https://vilkas99.github.io/melp/",
      "Access-Control-Allow-Origin": true,
    },
  };

  useEffect(() => {
    console.log("NUEVO PUSH!:)");
    const fetchData = async () => {
      setCargado(true);
      setError(false);
      try {
        await axios.get(url, config).then((respuesta) => {
          console.log(respuesta);
        });
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return [setUrl];
}

export default useFetch;
