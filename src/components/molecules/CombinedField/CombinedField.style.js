const stylizer = theme => ({
  root: {
    position: "relative",
    border: `solid 1px ${theme.palette.disabled.main}`,
    borderRadius: 8,
    display: "flex",
    "&:focus-within": {
      outline: "none",
      border: `solid 1px ${theme.palette.secondary.main}`,
    },
    "& > div:first-of-type": {
      width: 102,
      border: "none",
    },
    "& > div:nth-of-type(2)": {
      border: "none",
      borderRadius: 0,
      borderLeft: `solid 1px ${theme.palette.disabled.main}`,
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
});

export default stylizer;
