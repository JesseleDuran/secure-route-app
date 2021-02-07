import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  button: {
    boxShadow: "200px 200px 200px 120px",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: theme.typography.fontFamily.regular,
    padding: "20px 0px 20px 20px",
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 1100,
    backgroundColor: "white",
  },
  distance: {
    fontFamily: theme.typography.fontFamily.light,
    fontWeight: "100",
    color: "grey",
  }
});

export default stylizer;
