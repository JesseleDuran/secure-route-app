const stylizer = theme => ({
  field: {
    padding: "8px 24px 24px 24px",
    "& .RappiTextField": {
      width: "calc(100% - 16px)",
    },
  },
  fieldWrapper: {
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: "white",
    "& > [class*=error]": {
      fontSize: 11,
    },
  },
  agreementWrapper: {
    "& [class*=label]": {
      fontSize: 14,
    },
    marginBottom: 15,
  },
  error: {
    color: theme.palette.secondary.main,
    fontSize: "12px",
    fontWeight: "700",
    fontFamily: theme.typography.fontFamily.regular,
    padding: "2px 8px",
    position: "absolute",
  },
  info: {
    fontFamily: theme.typography.fontFamily.light,
    fontSize: "12px",
    padding: "0 24px 8px 24px",
    letterSpacing: 0.3,
  },
  paragraph: {
    fontFamily: theme.typography.fontFamily.regular,
    "& > strong": {
      color: theme.palette.secondary.main,
      fontWeight: "100",
    },
  },
  lastField: {
    marginBottom: 36,
  },
  alertContainer: {
    marginBottom: 16,
  },
});

export default stylizer;
