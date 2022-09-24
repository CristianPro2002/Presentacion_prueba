import React from "react";
import CajeroGeneral from "../pages/Private/Cajero/CajeroGeneral";
import { useCajeroP } from "../Components/hooks/useCajeroP";

export const Sum = () => {
  const {
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
  } = useCajeroP();

  const ValorC1 = sumCaj1 - restCaj1;
  const ValorC2 = sumCaj2 - restCaj2;
  const ValorC3 = sumCaj3 - restCaj3;
  const ValorC4 = sumCaj4 - restCaj4;
  const ValorC5 = sumCaj5 - restCaj5;

  return {
    ValorC1,
    ValorC2,
    ValorC3,
    ValorC4,
    ValorC5,
  };
};

export const Cajero1 = (props) => {
  const { ValorC1 } = Sum();
  return (
    <div>
      <CajeroGeneral
        numeroCajero="Cajero #1"
        numeroCajeroBD="Cajero1"
        onclick="/Tabla1"
        Valor={ValorC1}
      />
    </div>
  );
};

export const Cajero2 = (props) => {
  const { ValorC2 } = Sum();
  return (
    <div>
      <CajeroGeneral
        numeroCajero="Cajero #2"
        numeroCajeroBD="Cajero2"
        onclick="/Tabla2"
        Valor={ValorC2}
      />
    </div>
  );
};

export const Cajero3 = (props) => {
  const { ValorC3 } = Sum();
  return (
    <div>
      <CajeroGeneral
        numeroCajero="Cajero #3"
        numeroCajeroBD="Cajero3"
        onclick="/Tabla3"
        Valor={ValorC3}
      />
    </div>
  );
};

export const Cajero4 = (props) => {
  const { ValorC4 } = Sum();
  return (
    <div>
      <CajeroGeneral
        numeroCajero="Cajero #4"
        numeroCajeroBD="Cajero4"
        onclick="/Tabla4"
        Valor={ValorC4}
      />
    </div>
  );
};

export const Cajero5 = (props) => {
  const { ValorC5 } = Sum();
  return (
    <div>
      <CajeroGeneral
        numeroCajero="Cajero #5"
        numeroCajeroBD="Cajero5"
        onclick="/Tabla5"
        Valor={ValorC5}
      />
    </div>
  );
};
