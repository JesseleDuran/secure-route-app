import baseStyle from "./CombinedField.style";

const stylizer = theme => {
  const base = baseStyle(theme);

  const styles = {
    ...base,
    root: {
      ...base.root,
      borderWidth: 2,
      borderRadius: 15,
      "&:focus-within": {
        ...base.root["&:focus-within"],
        borderWidth: 2,
      },
      "& > div:first-of-type": {
        ...base.root["& > div:first-of-type"],
        width: 135,
        "& img[class*=icon]": {
          marginRight: 5,
        },
        "& [class*=select]": {
          paddingRight: 15,
        },
      },
      "& > div:nth-of-type(2)": {
        ...base.root["& > div:nth-of-type(2)"],
        borderLeftWidth: 2,
      },
    },
  };

  return styles;
};

export default stylizer;
