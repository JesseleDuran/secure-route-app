import React from "react";
import Grid from "@material-ui/core/Grid";
import map from "lodash/map";
import * as PropTypes from "prop-types";
import * as classnames from "classnames";
import { translateKey } from "../../../utils/translate";

const DELETE_KEY = 8;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const ZERO_KEY = 48;
const NINE_KEY = 57;
const ZERO_KEY_NUMERIC = 96;
const NINE_KEY_NUMERIC = 105;
const IGNORED_KEYS = [DELETE_KEY, ARROW_LEFT, ARROW_RIGHT];
const WAIT_TIME_TILL_FOCUS_NEXT = 100;

const onKeyDown = (onChange, length) => event => {
  const {
    target: { form },
    keyCode,
  } = event;
  if (
    (keyCode >= ZERO_KEY && keyCode <= NINE_KEY) ||
    (keyCode >= ZERO_KEY_NUMERIC && keyCode <= NINE_KEY_NUMERIC)
  ) {
    const index = Array.prototype.indexOf.call(form, event.target);
    form.elements[index].value =
      keyCode >= ZERO_KEY_NUMERIC
        ? `${event.keyCode - ZERO_KEY_NUMERIC}`
        : `${event.keyCode - ZERO_KEY}`;
    setTimeout(() => {
      if (form.elements.length - 1 > index) {
        form.elements[index + 1].focus();
      }

      const newValue = map(form.elements, e => e.value).reduce(
        (prev, next) => prev + next,
        "",
      );
      if (newValue.length === length) {
        onChange(newValue);
      }
    }, WAIT_TIME_TILL_FOCUS_NEXT);
  } else if (!IGNORED_KEYS.includes(event.keyCode)) {
    event.preventDefault();
  }
};

const CodeField = ({ classes, length, onChange, error }) => (
  <form>
    <Grid container spacing={2} className={classes.root}>
      {[...Array(length).keys()].map(() => (
        <Grid item xs={12 / length}>
          <input
            className={
              error
                ? classnames(classes.input, classes.inputOnError)
                : classes.input
            }
            placeholder="0"
            maxLength="1"
            onKeyDown={onKeyDown(onChange, length)}
          />
        </Grid>
      ))}
      {error && (
        <span className={classes.error}>
          {translateKey("modal.verifyModal.error")}
        </span>
      )}
    </Grid>
  </form>
);

CodeField.propTypes = {
  classes: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

CodeField.defaultProps = {
  error: false,
};

export default CodeField;
