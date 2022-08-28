import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  Document,
  Page,
  View,
  Text,
  PDFViewer,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import Logo from "../../assets/Logo/logo.png";
import Button from "react-bootstrap/Button";
import "./Modals.css";

export const McajeroReporte = ({
  mostrarReporte,
  handleShowReporte,
  reportCuenta,
  NoCuenta,
}) => {
  const styles = StyleSheet.create({
    pdfViewers: { width: "100%", height: "100vh" },
    page: { padding: "20px" },
    logo_styles: { width: "200px" },
    title_reporte: {
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      padding: "10px",
    },
    title_cuenta: { fontSize: "20px", paddingBottom: "10px" },
    content_header: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      fontSize: "15px",
      border: "1px solid #000",
    },
    content_titles: {
      width: "50%",
      textAlign: "center",
      fontWeight: "extrabold",
      borderRight: "1px solid #000",
      padding: "5px",
    },
    content_body: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      fontSize: "15px",
      border: "1px solid #000",
    },
    content_titles_body: {
      width: "50%",
      textAlign: "center",
      borderRight: "1px solid #000",
      padding: "5px",
    },
  });
  return (
    <>
      <Modal isOpen={mostrarReporte} size="xl">
        <ModalHeader closeButton>Reporte de Cuenta</ModalHeader>
        <ModalBody>
          {reportCuenta.length >= 1 ? (
            <PDFViewer style={styles.pdfViewers}>
              <Document>
                <Page size="A4" style={styles.page}>
                  <View>
                    <Image src={Logo} style={styles.logo_styles} />
                    <Text style={styles.title_reporte}>Reporte de cuenta</Text>
                    <Text style={styles.title_cuenta}>
                      No. Cuenta: {NoCuenta}
                    </Text>
                    <View style={styles.content_header}>
                      <View style={styles.content_titles}>
                        <Text>Tipo de actividad</Text>
                      </View>
                      <View style={styles.content_titles}>
                        <Text>Cantidad de valor</Text>
                      </View>
                    </View>
                    {reportCuenta.map((data) => (
                      <View>
                        <View style={styles.content_body}>
                          <View style={styles.content_titles_body}>
                            <Text>{data.ti_pro}</Text>
                          </View>
                          <View style={styles.content_titles_body}>
                            <Text>{data.Valor}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          ) : (
            <>
              <div
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <h1>
                  <b>No hay informacion</b>
                </h1>
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="danger" onClick={() => handleShowReporte()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const McajeroReporte2 = ({
  mostrarReporteDate,
  handleShowReporteDate,
  reportCuentaDate,
}) => {
  const styles = StyleSheet.create({
    pdfViewers: { width: "100%", height: "100vh" },
    page: { padding: "20px" },
  });
  return (
    <>
      <Modal isOpen={mostrarReporteDate} size="xl">
        <ModalHeader closeButton>Reporte de acciones de cuenta</ModalHeader>
        <ModalBody>
          {reportCuentaDate.length >= 1 ? (
            <PDFViewer style={styles.pdfViewers}>
              <Document>
                <Page size="A4" style={styles.page}>
                  {reportCuentaDate.map((data) => (
                    <div>
                      <div>
                        <div>
                          <label>
                            <b>Id</b>
                          </label>
                        </div>
                        {data.Id_act}
                      </div>
                      <div>
                        <div>
                          <label>
                            <b>Fecha</b>
                          </label>
                        </div>
                        {data.Fe_act}
                      </div>
                      <div>
                        <div>
                          <label>
                            <b>Producto</b>
                          </label>
                        </div>
                        {data.ti_pro}
                      </div>
                      <div>
                        <div>
                          <label>
                            <b>Valor</b>
                          </label>
                        </div>
                        {data.Valor}
                      </div>
                      <div>
                        <div>
                          <label>
                            <b>Cuenta</b>
                          </label>
                        </div>
                        {data.No_cuec}
                        {data.No_cuej}
                      </div>
                    </div>
                  ))}
                </Page>
              </Document>
            </PDFViewer>
          ) : (
            <>
              <div
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <h1>
                  <b>No hay informacion</b>
                </h1>
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="danger" onClick={() => handleShowReporteDate()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
