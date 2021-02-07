import baseStyle from "./TextField.style";

const stylizer = theme => {
  const base = baseStyle(theme);

  const styles = {
    ...base,
    root: {
      ...base.root,
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      minHeight: 60,
      paddingLeft: 20,
      paddingRight: 20,
      borderWidth: 2,
      borderRadius: 15,
      "&:focus-within": {
        ...base.root["&:focus-within"],
        borderWidth: 2,
      },
      "& > div": {
        fontSize: 16,
        [theme.breakpoints.down("xs")]: {
          fontSize: 14,
        },
      },
    },
  };

  return styles;
};

export default stylizer;
