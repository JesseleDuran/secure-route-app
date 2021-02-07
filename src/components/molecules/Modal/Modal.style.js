import baseStyleInjector from "../../../assets/styles/FormBase.style";

const stylizer = theme => ({
  dialog: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "40vh",
    },
  },
  image: {
    maxWidth: "40vh",
  },
  title: {
    color: theme.typography.palette.main,
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: 24,
    margin: "20px 16px",
  },
  divider: {
    width: "100%",
  },
  paragraph: {
    ...baseStyleInjector(theme).paragraph,
    padding: "0 16px",
  },
  container: {
    padding: 16,
  },
});

export default stylizer;
