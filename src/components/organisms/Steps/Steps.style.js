import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  appBar: {
    position: "relative",
  },
  list: {
    fontFamily: theme.typography.fontFamily.regular,
  },
});

export default stylizer;
