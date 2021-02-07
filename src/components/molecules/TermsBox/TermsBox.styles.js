const stylizer = theme => ({
  root: {
    color: theme.palette.primary.dark,
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: 13,
    margin: "8px",
    overflowY: "auto",
    padding: "8px 24px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      minHeight: "650px",
    },
  },
  title: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: 17,
    marginBottom: 27,
  },
  text: {
    letterSpacing: 0,
    lineHeight: "24px",
    margin: 10,
    textAlign: "left",
  },
  iframe: {
    width: "100%",
    border: `1px solid ${theme.palette.disabled.main}`,
    minHeight: "650px", // CUZ THE TERMS NEED AT LEAST 650px to sign it?
    overflow: "auto",
    [theme.breakpoints.down("xs")]: {
      left: 0,
      position: "absolute",
    },
  },
});

export default stylizer;
