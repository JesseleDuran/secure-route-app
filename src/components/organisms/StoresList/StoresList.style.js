import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  base: {
    borderRadius: 16,
    backgroundColor: "white",
    margin: 27,
    marginBottom: 90,
  },
  metadata: {
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.typography.palette.subtitle,
    fontSize: 12,
    padding: "16px 16px 0 16px",
  },
  title: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: 14,
    color: "black",
  },
});

export default stylizer;
