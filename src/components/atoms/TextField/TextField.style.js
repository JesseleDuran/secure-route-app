const DEFAULT_FONT_SIZE = 14;

const stylizer = theme => {
  const styles = {
    root: {
      border: `solid 1px ${theme.palette.disabled.main}`,
      minHeight: "36px",
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.typography.palette.main,
      borderRadius: 8,
      fontSize: DEFAULT_FONT_SIZE,
      letterSpacing: 0,
      "& > div": {
        fontFamily: theme.typography.fontFamily.regular,
        height: 36,
        fontSize: DEFAULT_FONT_SIZE,
        letterSpacing: 0,
      },
      padding: "0 8px",
      "&:focus-within": {
        outline: "none",
        fontSize: DEFAULT_FONT_SIZE,
        border: `solid 1px ${theme.palette.secondary.main}`,
      },
    },
    rootError: {
      border: `solid 1px ${theme.palette.secondary.main}`,
    },
    error: {
      color: theme.palette.secondary.main,
      fontSize: "12px",
      fontWeight: "700",
      fontFamily: theme.typography.fontFamily.regular,
      padding: "2px 8px",
      position: "absolute",
    },
    tooltipIconEnd: {
      cursor: "help",
      position: "absolute",
      right: 10,
      top: 25,
      "&:hover": {
        "& path:nth-child(1)": {
          stroke: theme.palette.primary.success,
        },
        "& path:nth-child(2)": {
          fill: theme.palette.primary.success,
        },
      },
    },
    tooltipRoot: {
      marginTop: -5,
      opacity: 1,
    },
    tooltip: {
      backgroundColor: "#424766",
      boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.3)",
      fontFamily: theme.typography.fontFamily.regular,
      fontSize: 12,
      fontWeight: "normal",
      maxWidth: 200,
      padding: "12px 16px",
      textAlign: "center",
      "&:after": {
        border: "6px solid transparent",
        borderBottomColor: "#424766",
        content: "''",
        fontFamily: theme.typography.fontFamily.regular,
        left: "50%",
        marginLeft: -5,
        marginTop: -12,
        position: "absolute",
        top: 0,
      },
    },
  };

  return styles;
};

export default stylizer;
