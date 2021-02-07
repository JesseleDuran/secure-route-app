import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  avatar: {
    height: 64,
    width: 64,
  },
});

export default stylizer;
