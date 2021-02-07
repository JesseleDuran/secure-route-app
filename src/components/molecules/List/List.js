import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";
import Card from "../Card";

export default function SelectedListItem({
  classes,
  items,
  selected,
  onSelect,
  renderItem,
}) {
  // const {classes} = this.props;
  const [selectedIndex, setSelectedIndex] = React.useState(selected);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    onSelect(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {items.map(item => [
          <ListItem
            button
            selected={item === selected}
            onClick={event => handleListItemClick(event, item)}
            className={
              item === selected
                ? classNames(classes.item, classes.itemSelected)
                : classes.item
            }
          >
            {renderItem(item)}
          </ListItem>,
          <Divider />,
        ])}
      </List>
    </div>
  );
}

SelectedListItem.defaultProps = {
  items: [],
};

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array,
};
