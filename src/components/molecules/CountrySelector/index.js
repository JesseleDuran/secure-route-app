import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { get } from "lodash";
import ArgentinianFlag from "../../../assets/images/flags/ar.svg";
import BrazilianFlag from "../../../assets/images/flags/br.svg";
import ChileanFlag from "../../../assets/images/flags/cl.svg";
import ColombianFlag from "../../../assets/images/flags/co.svg";
import MexicanFlag from "../../../assets/images/flags/mx.svg";
import PeruvianFlag from "../../../assets/images/flags/pe.svg";
import UruguayanFlag from "../../../assets/images/flags/uy.svg";
import EcuatorianFlag from "../../../assets/images/flags/ec.svg";
import CostaRicaFlag from "../../../assets/images/flags/cr.svg";

const styles = () => ({
  select: {
    border: "1px solid #e6ebf1",
    padding: "14px 32px 13px 10px",
    width: "100%",
    "&:focus": {
      backgroundColor: "transparent!important",
    },
  },
  menu: {
    borderRadius: 0,
    boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.2)",
    marginTop: 64,
    width: 200,
  },
  flag: {
    marginRight: 20,
    verticalAlign: "middle",
  },
  selected: {
    backgroundColor: "#e6ebf1",
  },
});

class CountrySelector extends Component {
  countries = {
    AR: { name: "Argentina", flag: ArgentinianFlag },
    BR: { name: "Brasil", flag: BrazilianFlag },
    CL: { name: "Chile", flag: ChileanFlag },
    CO: { name: "Colombia", flag: ColombianFlag },
    MX: { name: "Mexico", flag: MexicanFlag },
    PE: { name: "Perú", flag: PeruvianFlag },
    UY: { name: "Uruguay", flag: UruguayanFlag },
    CR: { name: "Costa Rica", flag: CostaRicaFlag },
    EC: { name: "Ecuador", flag: EcuatorianFlag },
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    country: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onChange: null,
  };

  onChange = event => {
    window.localStorage.setItem("country", event.target.value);
    this.props.onChange(event.target.value);
  };

  renderValue = country => (
    <div>
      <img
        src={get(this.countries, [country, "flag"], "")}
        alt={country}
        className={this.props.classes.flag}
      />
      <span>{get(this.countries, [country, "name"], "")}</span>
    </div>
  );

  render() {
    const { classes } = this.props;

    return (
      <Select
        style={{ width: "100%" }}
        value={this.props.country || "CO"}
        onChange={this.onChange}
        inputProps={{
          name: "country",
          id: "country",
        }}
        classes={{
          select: classes.select,
        }}
        MenuProps={{
          classes: {
            paper: classes.menu,
          },
        }}
        disableUnderline
        renderValue={this.renderValue}
      >
        {Object.keys(this.countries).map((countryCode, index) => {
          const country = this.countries[countryCode];
          return (
            <MenuItem
              value={countryCode}
              key={`country-${index}`}
              classes={{ selected: classes.selected }}
            >
              <img
                src={country.flag}
                alt={countryCode}
                className={classes.flag}
              />
              <span>{country.name}</span>
            </MenuItem>
          );
        })}
      </Select>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CountrySelector);
