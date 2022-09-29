import React from "react";
import Tabla from "../pages/Private/Cajero/Tabla";
import {
  ReporteC1,
  ReporteC2,
  ReporteC3,
  ReporteC4,
  ReporteC5,
} from "../helpers/url";

export const TablaView1 = () => {
  return (
    <>
      <Tabla
        numeroCajero="Registro de Cajero 1"
        cajero="Cajero1"
        link={ReporteC1}
      />
    </>
  );
};
export const TablaView2 = () => {
  return (
    <>
      <Tabla
        numeroCajero="Registro de Cajero 2"
        cajero="Cajero2"
        link={ReporteC2}
      />
    </>
  );
};

export const TablaView3 = () => {
  return (
    <>
      <Tabla
        numeroCajero="Registro de Cajero 3"
        cajero="Cajero3"
        link={ReporteC3}
      />
    </>
  );
};

export const TablaView4 = () => {
  return (
    <>
      <Tabla
        numeroCajero="Registro de Cajero 4"
        cajero="Cajero4"
        link={ReporteC4}
      />
    </>
  );
};

export const TablaView5 = () => {
  return (
    <>
      <Tabla
        numeroCajero="Registro de Cajero 5"
        cajero="Cajero5"
        link={ReporteC5}
      />
    </>
  );
};
