import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  accordion: {
    fontFamily: theme.typography.fontFamily.bold,
    boxShadow: "none",
    fontSize: 14,
  },
  secondary: {
    fontFamily: theme.typography.fontFamily.light,
    position: "absolute",
    left: 326,
  },
});

export default stylizer;
