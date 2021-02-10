import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  base: {
    fontFamily: theme.typography.fontFamily.regular,
    backgroundColor: "white",
    margin: "0 6px"
  },
  selected: {
    fontFamily: theme.typography.fontFamily.regular,
    backgroundColor: "#e4f2fd !important",
    margin: "0 6px",
    color: "#1d73e7",
  },
});

export default stylizer;
