import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export function SpinnerLoading() {
  return (
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Cargando...
      </Button>
    </>
  );
}

export function SpinnerLoadingDos() {
  return (
    <>
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}
