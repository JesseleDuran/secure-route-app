import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  base: {
    borderRadius: 16,
    backgroundColor: "white",
    margin: 27,
  },
  title: {
    fontFamily: theme.typography.fontFamily.bold,
    padding: "15px 24px 6px 24px",
  },
  treatment: {
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: 13,
    paddingTop: 6,
  },
});

export default stylizer;
