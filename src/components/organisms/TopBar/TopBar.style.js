import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  field: {
    "& .RappiTextField": {
      width: "calc(100% - 16px)",
    },
    width: "80%",
    paddingTop: 7
  },
  modes: {
    paddingTop: 20,
  }
});

export default stylizer;
