import React from "react";
import * as PropTypes from "prop-types";
import Icon from "./Icon";
import { translateKey } from "../../../utils/translate";

const WhatsAppHelp = ({ classes, country = "57" }) => (
  <a
    href={`https://wa.me/${
      country === "BR" ? "5511988841742" : "573154351645"
    }?text=${translateKey("whatsappHelp.message")}`}
    data-event-category="Social"
    data-event-action="Share:Whatsapp"
    data-event-label="Article Title"
    target="blank"
    className={classes.root}
  >
    <div className={classes.content}>
      <div className={classes.help}>{translateKey(`whatsappHelp.title`)}</div>
      <Icon />
      <div className={classes.scheduleMessage}>
        {translateKey(`whatsappHelp.scheduleMessage`)}
      </div>
      <div className={classes.scheduleMessage}>
        {translateKey(`whatsappHelp.schedule`)}
      </div>
    </div>
  </a>
);

WhatsAppHelp.propTypes = {
  classes: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
};

export default WhatsAppHelp;
