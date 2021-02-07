import baseStyle from "./Select.style";

const stylizer = theme => {
  const base = baseStyle(theme);

  const styles = {
    ...base,
    root: {
      ...base.root,
      width: "100%",
      boxSizing: "border-box",
      minHeight: 60,
      fontSize: 16,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 2,
      borderRadius: 15,
      "&:focus-within": {
        ...base.root["&:focus-within"],
        borderWidth: 2,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 14,
      },
    },
    icon: {
      ...base.icon,
      height: 20,
      marginRight: 20,
    },
  };

  styles.hoverRoot = {
    ...styles.root,
    fontWeight: "normal",
    color: theme.typography.palette.placeholder,
  };

  return styles;
};

export default stylizer;
