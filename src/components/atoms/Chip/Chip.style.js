import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  base: {
    fontFamily: theme.typography.fontFamily.regular,
    backgroundColor: "white",
    margin: "0 6px"
  },
});

export default stylizer;
