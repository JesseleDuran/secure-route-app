import React from "react";
import * as PropTypes from "prop-types";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const RappiAccordion = ({
  classes,
  children = null,
  title,
  secondaryHeader,
}) => (
  <Accordion defaultExpanded className={classes.accordion}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      {title}
      <span className={classes.secondary}>{secondaryHeader}</span>
    </AccordionSummary>
    {children}
  </Accordion>
);

RappiAccordion.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  secondaryHeader: PropTypes.string.isRequired,
};

export default RappiAccordion;
