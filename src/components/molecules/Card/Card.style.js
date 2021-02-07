import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  root: {
    width: "100%",
    textAlign: "initial",
    fontFamily: theme.typography.fontFamily.regular,
  },
  card: {
    width: "100%",
    textAlign: "initial",
    padding: 15,
    fontFamily: theme.typography.fontFamily.regular,
  },
  description: {
    fontSize: 12,
    paddingBottom: 7,
  },
  distance: {
    color: "#939393",
    fontSize: 10,
  },
});

export default stylizer;
