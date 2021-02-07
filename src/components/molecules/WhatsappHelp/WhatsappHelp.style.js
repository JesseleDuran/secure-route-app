const stylizer = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily.regular,
    color: "#fff",
    fontSize: 12,
    cursor: "pointer",
    textDecoration: "none",
    position: "fixed",
    bottom: "2vh",
    right: "2vw",
    [theme.breakpoints.down("sm")]: {
      position: "unset",
    },
  },
  content: {
    backgroundColor: "#44d77d",
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },
  help: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 4,
  },
  scheduleMessage: {
    marginTop: 4,
  },
  schedule: {
    marginTop: 4,
  },
});

export default stylizer;
