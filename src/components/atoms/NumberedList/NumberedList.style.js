const stylizer = theme => ({
  title: {
    color: theme.typography.palette.main,
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: 24,
    marginBottom: 20,
  },
  divider: {
    width: "100%",
    marginBottom: 20,
  },
  icon: {
    color: theme.typography.palette.placeholder,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  componentContainer: {
    paddingTop: 6,
  },
  link: {
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.typography.palette.placeholder,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  tooltip: {
    borderRadius: 8,
    fontFamily: theme.typography.fontFamily.regular,
    backgroundColor: theme.typography.palette.main,
    lineHeight: 2,
    fontSize: 12,
    color: "white",
    padding: "14px 20px",
    textAlign: "right",
  },
  arrow: {
    color: theme.typography.palette.main,
  },
});

export default stylizer;
