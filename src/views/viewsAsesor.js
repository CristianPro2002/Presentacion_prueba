import AsesorGeneral from "../pages/Private/Asesor/AsesorGeneral";
import { useNavigate } from "react-router-dom";

export const Asesor = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Rasesor")}
        numeroAsesor="Asesor #1"
      />
    </div>
  );
};

export const Asesor2 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Rasesor")}
        numeroAsesor="Asesor #2"
      />
    </div>
  );
};

export const Asesor3 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Rasesor")}
        numeroAsesor="Asesor #3"
      />
    </div>
  );
};
export const Asesor4 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Rasesor")}
        numeroAsesor="Asesor #4"
      />
    </div>
  );
};

export const Asesor5 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Rasesor")}
        numeroAsesor="Asesor #5"
      />
    </div>
  );
};

export const AsesorD1 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Roles")}
        numeroAsesor="Asesor #1"
      />
    </div>
  );
};

export const AsesorD2 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Roles")}
        numeroAsesor="Asesor #2"
      />
    </div>
  );
};

export const AsesorD3 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Roles")}
        numeroAsesor="Asesor #3"
      />
    </div>
  );
};

export const AsesorD4 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Roles")}
        numeroAsesor="Asesor #4"
      />
    </div>
  );
};

export const AsesorD5 = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <AsesorGeneral
        onclick={() => Navigate("/Roles")}
        numeroAsesor="Asesor #5"
      />
    </div>
  );
};
