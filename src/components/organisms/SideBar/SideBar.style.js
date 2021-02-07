import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  ...baseStyleInjector(theme),
  drawer: {
    width: 506,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 506,
    marginTop: 80,
    backgroundColor: "#f9f9f8",
    border: "none",
  },
});

export default stylizer;
