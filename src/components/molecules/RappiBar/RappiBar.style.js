const stylizer = theme => ({
  AppBar: {
    background: "#ffffff",
    boxShadow: "0 1px 1px 0 #e5e5e4",
    height: "23vh",
  },
  NoUnderLine: {
    background: "#ffffff",
    boxShadow: "none",
    height: "23vh",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    margin: 0,
    // minHeight: "23vh",
    [theme.breakpoints.up("md")]: {
      margin: "0 1%",
    },
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 9,
    width: 44,
  },
});

export default stylizer;
