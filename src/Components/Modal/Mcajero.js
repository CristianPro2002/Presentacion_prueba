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
  reportValueC,
  reportValueR,
}) => {
  const initialValue = 0;
  const sumValueC = reportValueC
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

  const restValueC = reportValueR
    .map((item) => parseInt(item.Valor))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

  const sumTotalCuent = sumValueC - restValueC;

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

    value_cuenta: {
      width: "20%",
      textAlign: "center",
      border: "1px solid red",
      color: "red",
    },
    text_value: {
      width: "80%",
    },
    content_value: {
      padding: "10px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
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
                    <View style={styles.content_value}>
                      <Text style={styles.text_value}>
                        Cantidad disponible:{" "}
                      </Text>
                      <Text style={styles.value_cuenta}>{sumTotalCuent}</Text>
                    </View>
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
                  <b>No existe informacion de este numero de cuenta!</b>
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
  dataUsuarioReportDate,
}) => {
  const Min_date = dataUsuarioReportDate.Min_date;
  const Max_date = dataUsuarioReportDate.Max_date;

  const styles = StyleSheet.create({
    pdfViewers: { width: "100%", height: "100vh" },
    page: { padding: "20px" },
    logo_styles: { width: "200px" },
    title_reporte: {
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      padding: "25px",
    },
    content_header: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      fontSize: "15px",
      border: "1px solid #000",
    },
    content_titles: {
      width: "20%",
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
    content_dates: {
      padding: "10px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    Fe_inicio: {
      width: "50%",
      textAlign: "center",
    },
    Fe_fin: {
      width: "50%",
      textAlign: "center",
    },
  });

  return (
    <>
      <Modal isOpen={mostrarReporteDate} size="xl">
        <ModalHeader closeButton>Reporte de acciones de cuenta</ModalHeader>
        <ModalBody>
          {reportCuentaDate.length >= 1 && reportCuentaDate.length <= 300 ? (
            <PDFViewer style={styles.pdfViewers}>
              <Document>
                <Page size="A4" style={styles.page}>
                  <View>
                    <Image src={Logo} style={styles.logo_styles} />
                    <Text style={styles.title_reporte}>
                      Reporte de transacciones
                    </Text>
                    <View style={styles.content_dates}>
                      <Text style={styles.Fe_inicio}>
                        Fecha de inicio: {Min_date}
                      </Text>
                      <Text style={styles.Fe_fin}>
                        Fecha de fin: {Max_date}
                      </Text>
                    </View>
                    <View style={styles.content_header}>
                      <View style={styles.content_titles}>
                        <Text>Id</Text>
                      </View>
                      <View style={styles.content_titles}>
                        <Text>Fecha</Text>
                      </View>
                      <View style={styles.content_titles}>
                        <Text>Producto</Text>
                      </View>
                      <View style={styles.content_titles}>
                        <Text>Valor</Text>
                      </View>
                      <View style={styles.content_titles}>
                        <Text>Cuenta</Text>
                      </View>
                    </View>
                    {reportCuentaDate.map((data) => (
                      <View>
                        <View style={styles.content_body}>
                          <View style={styles.content_titles_body}>
                            <Text>{data.Id_act}</Text>
                          </View>
                          <View style={styles.content_titles_body}>
                            <Text>{data.Fe_act} </Text>
                          </View>
                          <View style={styles.content_titles_body}>
                            <Text>{data.ti_pro}</Text>
                          </View>
                          <View style={styles.content_titles_body}>
                            <Text>{data.Valor}</Text>
                          </View>
                          <View style={styles.content_titles_body}>
                            <Text>{data.No_cuec}</Text>
                            <Text>{data.No_cuej}</Text>
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
                  <b>No existen registros en este rango de fecha!</b>
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
