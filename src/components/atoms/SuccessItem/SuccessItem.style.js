const stylizer = theme => ({
  root: {
    fontSize: 12,
    color: theme.typography.palette.subtitle,
    textAlign: "left",
    padding: "0px 3px",
    marginBottom: 6,
    display: "flex",
    fontFamily: theme.typography.fontFamily.regular,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

export default stylizer;
