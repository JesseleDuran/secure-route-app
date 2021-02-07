const stylizer = theme => ({
  container: {
    padding: "16px 22px",
    fontFamily: theme.typography.fontFamily.light,
    lineHeight: 2,
    borderRadius: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 0,
  },
  message: {
    fontSize: 12,
    margin: 0,
    "& > b": {
      fontFamily: theme.typography.fontFamily.bold,
    },
  },
  icon: {
    color: theme.palette.primary.light,
    paddingRight: 10,
  },
  green: {
    backgroundColor: "#EAF9F7",
    "& h3": {
      color: "#2EC4B6",
    },
    "& p": {
      color: "#2EC4B6",
    },
  },
  red: {
    backgroundColor: "#fdebee",
    "& h3": {
      color: "#f33959",
    },
    "& p, .MuiSvgIcon-root": {
      color: "#f33959",
    },
  },
  orange: {
    backgroundColor: "#fff6e5",
    "& h3": {
      color: "#ffaa00",
    },
    "& p": {
      color: "#ffaa00",
    },
  },
  blue: {
    backgroundColor: "#eaedff",
    "& h3": {
      color: "#5867c3",
    },
    "& p": {
      color: "#5867c3",
    },
  },
  black: {
    backgroundColor: theme.typography.palette.main,
    "& h3": {
      color: "white",
    },
    "& p": {
      color: "white",
    },
  },
});

export default stylizer;
