const stylizer = theme => {
  const radio = {
    fontFamily: theme.typography.fontFamily.regular,
  };
  const radioChecked = {
    ...radio,
    "& .MuiIconButton-root": {
      color: theme.palette.secondary.main,
    },
  };
  const radioUnchecked = {
    ...radio,
    "& .MuiIconButton-root": {
      color: theme.typography.palette.subtitle,
    },
  };
  const disabled = {
    opacity: 0.5,
  };
  return { radioChecked, radioUnchecked, radio, disabled };
};

export default stylizer;
