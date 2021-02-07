const stylizer = theme => ({
  root: {
    backgroundColor: "#ffffff",
    border: "1px solid",
    borderColor: theme.palette.disabled.main,
    "& hr": {
      backgroundColor: "#e6ebf1",
    },
  },
  floating: {
    border: "none",
    boxShadow: "0 40px 40px 0 rgba(0, 0, 0, 0.1)",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "64px",
    padding: "0 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  title: {
    color: "#1f2532",
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: 20,
  },
  centeredTitle: {
    textAlign: "center",
  },
  withSubtitle: {
    padding: 15,
    "& :nth-child(1)": {
      fontFamily: theme.typography.fontFamily.light,
      fontSize: 20,
      fontWeight: 300,
    },
    "& :nth-child(2)": {
      fontFamily: theme.typography.fontFamily.bold,
      fontSize: 30,
    },
  },
});

export default stylizer;
