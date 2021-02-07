const stylizer = theme => ({
  root: {
    border: "1px solid",
    borderColor: theme.palette.disabled.main,
    color: theme.palette.primary.dark,
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: 13,
    margin: 30,
    cursor: "pointer",
  },
  comission: {
    fontFamily: theme.typography.fontFamily.bold,
  },
  default: {
    backgroundColor: "#af65eb",
    border: "none",
    boxShadow: "0 20px 40px 0 #af65eb5e",
    color: "#ffffff",
    "& hr": {
      opacity: 0.1,
    },
  },
  rappi: {
    backgroundColor: "#425dff",
    border: "none",
    boxShadow: "0 20px 40px 0 #425dff5e",
    color: "#ffffff",
    "& hr": {
      opacity: 0.1,
    },
  },
  titleContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 60,
    "& > span": {
      fontSize: 17,
      padding: 25,
      "&:first-of-type": {
        paddingRight: 0,
      },
    },
  },
  content: {
    padding: "10px 25px",
  },
  checked: {
    color: "#ffffff",
  },
});

export default stylizer;
