const stylizer = theme => ({
  root: {
    minHeight: 80,
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.palette.disabled.dark,
    fontSize: 15,
    "&:focus": {
      outline: "none",
    },
  },
  file: {
    width: "0.1px",
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
  },
  title: {
    fontSize: 16,
    color: theme.typography.palette.placeholder,
  },
  subtitle: {
    fontSize: 14,
    color: theme.typography.palette.subtitle,
  },
  button: {
    color: theme.palette.primary.main,
    fontWeight: 300,
    fontSize: 16,
    cursor: "pointer !important",
  },
  dropzone: {
    borderRadius: 8,
    border: `dashed 2px ${theme.typography.palette.subtitle}`,
    "&:focus": {
      outline: "none",
    },
  },
  disabled: {
    opacity: "0.5",
    pointerEvents: "none",
  },
  fileLoaded: {
    borderRadius: 8,
    border: `solid 2px ${theme.typography.palette.subtitle}`,
  },
  fileLoading: {
    padding: "0 12px",
    backgroundColor: "#f9f9f8",
    borderRadius: 8,
    border: `solid 2px ${theme.typography.palette.subtitle}`,
  },
  fileName: {
    display: "block",
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.typography.palette.placeholder,
    fontSize: 14,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  fileSize: {
    display: "block",
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.typography.palette.subtitle,
    fontSize: 12,
  },
  fileIcon: {
    color: theme.typography.palette.placeholder,
  },
  removeIcon: {
    color: theme.typography.palette.placeholder,
    cursor: "pointer",
    "&:hover": {
      color: theme.typography.palette.subtitle,
    },
  },
  infoIcon: {
    color: theme.typography.palette.placeholder,
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
  progressBar: {
    borderRadius: 20,
    backgroundColor: "#d8d8d8",
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: theme.palette.primary.light,
    },
    marginBottom: 10,
  },
  fileProgressText: {
    display: "block",
    fontFamily: theme.typography.fontFamily.regular,
    color: theme.typography.palette.subtitle,
    fontSize: 12,
    textAlign: "center",
  },
  iconContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});

export default stylizer;
