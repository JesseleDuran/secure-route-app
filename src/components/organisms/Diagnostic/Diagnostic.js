import React from "react";
import { Divider, Dialog } from "@material-ui/core";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import PropTypes from "prop-types";
import { Alert, AlertTitle } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import Grow from "@material-ui/core/Grow";
import Button from "../../atoms/Button";
import { translateKey } from "../../../utils/translate";
import TextField from "../../atoms/TextField";
import { BoxOnClose } from "../../atoms/Box";
import SuccessItem from "../../atoms/SuccessItem";
import NumberedList from "../../atoms/NumberedList";

const checkValidStoreId = storeId => isNaN(storeId) || storeId === "";

const Diagnostic = ({
  showDiagnostic,
  toggleDiagnostic,
  properties,
  classes,
  avatar,
  chip,
  diagnosticStoreId,
  onChangeStoreIdDiagnostic,
  onGetDiagnostic,
  diagnostic,
}) => (
  // <div className={classes.root}>
  <BoxOnClose
    show={showDiagnostic}
    toggleOnClose={toggleDiagnostic}
    title="Diagnóstico de Tienda"
  >
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={8} className={classes.field} style={{ padding: 0 }}>
        <TextField
          name="filter"
          value={diagnosticStoreId}
          placeholder="Ingrese store ID"
          style={{ minHeight: 45 }}
          handleChange={evt => {
            onChangeStoreIdDiagnostic(evt.target.value);
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          disabled={checkValidStoreId(diagnosticStoreId)}
          secondary={checkValidStoreId(diagnosticStoreId)}
          onClick={onGetDiagnostic}
        >
          Diagnosticar
        </Button>
      </Grid>
    </Grid>
    <div style={{ paddingBottom: 20 }}>
      {diagnostic.map(
        result =>
          result.label && (
            <SuccessItem isSuccess={result.value} label={result.label} />
          ),
      )}
    </div>
    <Divider />
    <Grid className={classes.root}>
      <Grid container justify="flex-start" alignItems="center">
        <Grid item>
          <InfoOutlined /> Si todas las validaciones son exitosas y la tienda no
          aparece, considere estos casos:
        </Grid>
      </Grid>
      <NumberedList
        labels={[
          `Si la tienda está recién creada, espere unos minutos antes de
          volver a consultarla.`,
          `Los polígonos pueden estar mal formados a pesar de contenerse entre
          sí.`,
        ]}
      />
      <Grid>¿Aun tienes problemas?</Grid>
      Contacte a soporte (#l2_soporte_rest) 
      
      Tenga a mano el Store ID que consulta, el país y la dirección donde la tienda no aparece. 
      Toda la documentación respecto a la gestión de polígonos, la encuentra en el
      siguiente link: Polygon Playbook (AR testing, Balanceo Automático,
      Clasificación de tiendas etc.)
    </Grid>
  </BoxOnClose>
);

Diagnostic.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.string,
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

Diagnostic.defaultProps = {
  open: false,
  title: null,
  subtitle: null,
  buttonText: null,
  image: null,
  onClick: () => {},
};

export default Diagnostic;
