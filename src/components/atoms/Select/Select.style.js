const DEFAULT_FONT_SIZE = 14;

const stylizer = theme => {
  const styles = {
    root: {
      width: "100%",
      minHeight: 46,
      opacity: 1,
      fontSize: DEFAULT_FONT_SIZE,
      borderRadius: 15,
      letterSpacing: 0,
      padding: "0 8px",
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.typography.palette.main,
      "&:focus-within": {
        outline: "none",
        border: `solid 1px ${theme.palette.secondary.main}`,
      },
      "& > .MuiSelect-select:focus": {
        background: "none",
      },
      "& > .MuiSelect-icon": {
        right: 6,
      },
      boxShadow: "0 6px 10px 0 rgba(128, 98, 96, 0.16)",
    },
    error: {
      fontSize: "12px",
      fontWeight: "700",
      padding: "2px 8px",
      position: "absolute",
    },
    item: {
      fontSize: 14,
      letterSpacing: 0,
      padding: "6px 16px",
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.typography.palette.placeholder,
      "&:hover": {
        background: theme.palette.disabled.main,
        color: theme.typography.palette.main,
      },
    },
    icon: {
      marginRight: 10,
      verticalAlign: "middle",
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
