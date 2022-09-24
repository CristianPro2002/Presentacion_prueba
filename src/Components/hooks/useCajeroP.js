import { useState, useEffect } from "react";
import axios from "axios";
import { Principal, CajeroBackend } from "../../helpers/url";
import toast from "react-hot-toast";

export const useCajeroP = () => {
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const [value3, setValue3] = useState([]);
  const [value4, setValue4] = useState([]);
  const [value5, setValue5] = useState([]);

  const [rest1, setRest1] = useState([]);
  const [rest2, setRest2] = useState([]);
  const [rest3, setRest3] = useState([]);
  const [rest4, setRest4] = useState([]);
  const [rest5, setRest5] = useState([]);

  const [mostrar, setMostrar] = useState(false);
  const handleShow = () => setMostrar(!mostrar);

  const [mostrarDos, setMostrarDos] = useState(false);
  const handleShowDos = () => setMostrarDos(!mostrarDos);

  const [mostrarTres, setMostrarTres] = useState(false);
  const handleShowTres = () => setMostrarTres(!mostrarTres);

  const [mostrarCuatro, setMostrarCuatro] = useState(false);
  const handleShowCuatro = () => setMostrarCuatro(!mostrarCuatro);

  const [mostrarCinco, setMostrarCinco] = useState(false);
  const handleShowCinco = () => setMostrarCinco(!mostrarCinco);

  const [ejecute, setEjecute] = useState(false);
  const [loading, setLoading] = useState(false);

  const ConsultaValue1 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE1");
    await axios.post(Principal, f).then((response) => {
      setValue1(response.data);
      setLoading(true);
    });
  };

  const ConsultaValue2 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE2");
    await axios.post(Principal, f).then((response) => {
      setValue2(response.data);
      setLoading(true);
    });
  };

  const ConsultaValue3 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE3");
    await axios.post(Principal, f).then((response) => {
      setValue3(response.data);
      setLoading(true);
    });
  };

  const ConsultaValue4 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE4");
    await axios.post(Principal, f).then((response) => {
      setValue4(response.data);
      setLoading(true);
    });
  };

  const ConsultaValue5 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUE5");
    await axios.post(Principal, f).then((response) => {
      setValue5(response.data);
      setLoading(true);
    });
  };

  const ConsultaRest1 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST1");
    await axios.post(Principal, f).then((response) => {
      setRest1(response.data);
      setLoading(true);
    });
  };

  const ConsultaRest2 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST2");
    await axios.post(Principal, f).then((response) => {
      setRest2(response.data);
      setLoading(true);
    });
  };

  const ConsultaRest3 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST3");
    await axios.post(Principal, f).then((response) => {
      setRest3(response.data);
      setLoading(true);
    });
  };

  const ConsultaRest4 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST4");
    await axios.post(Principal, f).then((response) => {
      setRest4(response.data);
      setLoading(true);
    });
  };

  const ConsultaRest5 = async () => {
    var f = new FormData();
    f.append("METHOD", "CONSULTAVALUEREST5");
    await axios.post(Principal, f).then((response) => {
      setRest5(response.data);
      setLoading(true);
    });
  };

  const DeleteValues = async () => {
    var f = new FormData();
    f.append("METHOD", "DELETEVALUES");
    await axios.post(CajeroBackend, f).then((response) => {
      if (response.data) {
        toast.success("Valores eliminados correctamente");
      }
    });
  };

  const initialValue = 0;
  const sumCaj1 = value1
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const sumCaj2 = value2
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const sumCaj3 = value3
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const sumCaj4 = value4
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const sumCaj5 = value5
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

  const restCaj1 = rest1
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const restCaj2 = rest2
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const restCaj3 = rest3
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const restCaj4 = rest4
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  const restCaj5 = rest5
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

  useEffect(() => {
    ConsultaValue1();
    ConsultaValue2();
    ConsultaValue3();
    ConsultaValue4();
    ConsultaValue5();
    ConsultaRest1();
    ConsultaRest2();
    ConsultaRest3();
    ConsultaRest4();
    ConsultaRest5();
  }, [ejecute]);

  useEffect(() => {
    ConsultaValue1();
    ConsultaValue2();
    ConsultaValue3();
    ConsultaValue4();
    ConsultaValue5();
    ConsultaRest1();
    ConsultaRest2();
    ConsultaRest3();
    ConsultaRest4();
    ConsultaRest5();
  }, []);

  const CajeroPactions = {
    ConsultaValue1,
    ConsultaValue2,
    ConsultaValue3,
    ConsultaValue4,
    ConsultaValue5,
    ConsultaRest1,
    ConsultaRest2,
    ConsultaRest3,
    ConsultaRest4,
    ConsultaRest5,
    DeleteValues,
    handleShow,
    handleShowDos,
    handleShowTres,
    handleShowCuatro,
    handleShowCinco,
  };

  return {
    CajeroPactions,
    sumCaj1,
    sumCaj2,
    sumCaj3,
    sumCaj4,
    sumCaj5,
    restCaj1,
    restCaj2,
    restCaj3,
    restCaj4,
    restCaj5,
    setEjecute,
    mostrar,
    mostrarDos,
    mostrarTres,
    mostrarCuatro,
    mostrarCinco,
    loading,
  };
};
