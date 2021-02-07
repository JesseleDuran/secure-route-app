import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  root: {
    width: 410,
    fontFamily: theme.typography.fontFamily.regular,
    top: 90,
    right: 25,
    zIndex: 999,
    position: "absolute",
    background: "white",
  },
  icon: {
    right: 7,
    position: "absolute",
    top: 6,
  },
});

export default stylizer;
