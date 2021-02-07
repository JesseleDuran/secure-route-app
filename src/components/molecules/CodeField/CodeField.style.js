const stylizer = theme => ({
  root: {
    marginTop: "20px",
  },
  input: {
    border: `solid 1px ${theme.palette.disabled.main}`,
    minHeight: "70px",
    textAlign: "center",
    width: "100%",
    fontFamily: theme.typography.fontFamily.light,
    color: "transparent",
    textShadow: `0 0 0 ${theme.palette.disabled.dark}`,
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.3,
    "&:focus": {
      outline: "none",
      background: "#fafafa",
      border: `solid 1px #2ec4b6`,
    },
  },
  inputOnError: {
    color: "black",
    border: "solid 1px #f33959",
    background: "#fff6f7",
    "&:focus": {
      outline: "none",
      border: "solid 1px #f33959",
      background: "#fff6f7",
    },
  },
  error: {
    color: theme.palette.secondary.main,
    fontSize: 15,
    fontFamily: theme.typography.fontFamily.light,
    padding: "2px 8px",
    textAlign: "left",
  },
});

export default stylizer;
