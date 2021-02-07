const stylizer = theme => ({
  tooltipContainer: {
    paddingTop: 6,
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
