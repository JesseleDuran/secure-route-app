import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  root: {
    width: "100%",
    maxWidth: 480,
  },
  item: {
    "&:hover": {
      backgroundColor: "white !important",
    },
    borderRadius: 16,
  },
  itemSelected: {
    backgroundColor: "white !important",
    zIndex: 999,
    boxShadow: "10px 10px 10px 10px rgba(128, 98, 96, 0.16)",
  },
});

export default stylizer;
