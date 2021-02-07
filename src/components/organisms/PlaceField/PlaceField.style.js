const stylizer = theme => {
  const styles = {
    error: {
      color: theme.palette.secondary.main,
      fontSize: 12,
      fontWeight: "700",
      fontFamily: theme.typography.fontFamily.regular,
      padding: "2px 8px",
      position: "absolute",
    },
    item: {
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.typography.palette.placeholder,
      fontSize: 14,
      letterSpacing: 0,
      padding: "6px 16px",
      "&:hover": {
        background: theme.palette.disabled.main,
        color: theme.typography.palette.main,
      },
    },
    container: {
      width: "fit-content",
      minWidth: 45,
      maxWidth: 45,
      [theme.breakpoints.down("md")]: {
        maxWidth: "380px",
      },
      position: "absolute",
      background: "white",
      zIndex: 2,
    },
  };

  styles.hoverRoot = {
    ...styles.root,
    color: theme.typography.palette.placeholder,
  };
  styles.hoverItem = {
    ...styles.item,
    color: theme.typography.palette.placeholder,
  };
  return styles;
};

export default stylizer;
