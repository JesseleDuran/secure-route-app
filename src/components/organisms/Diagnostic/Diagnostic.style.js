import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  root: {
    padding: "0 24px",
  },
  container: {
    padding: "20px 0px",
  },
});

export default stylizer;
