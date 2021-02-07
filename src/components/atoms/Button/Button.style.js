const stylizer = theme => {
  const primary = {
    minHeight: "48px",
    minWidth: "100px",
    borderRadius: "8px",
    fontSize: "14px",
    textTransform: "none",
    background: "#0cc665",
    fontFamily: theme.typography.fontFamily.regular,
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.6px",
    textAlign: "center",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#06af57",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "16px 12px",
    },
  };
  const secondary = {
    ...primary,
    color: "white !important",
    background: theme.palette.disabled.main,
    "&:hover": {},
  };
  const back = {
    ...secondary,
    background: theme.typography.palette.subtitle,
    "&:hover": {
      backgroundColor: "#b8b4b4c7",
    },
  };
  return { primary, secondary, back };
};

export default stylizer;
