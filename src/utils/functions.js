import { translateKey } from "./translate";

const mergeWithDefault = (initialValues, defaultValues) => {
  const values = { ...initialValues };
  Object.keys(defaultValues).forEach(key => {
    if (initialValues[key] === null || initialValues[key] === undefined) {
      values[key] = defaultValues[key];
    }
  });
  return values;
};

const addIds = array =>
  array.map((item, index) => ({ ...item, id: index + 1 }));

const limitLength = (string, length) => string.slice(0, length);

const onlyDigits = string => string.replace(/[^\d]+/g, "");

const noDigits = string => string.replace(/[0-9]/g, "");

const limitLengthOnlyDigits = (string, length) =>
  limitLength(onlyDigits(string), length);

const getInvalidMessage = replacer =>
  translateKey("form.infoForm.xInvalid").replace(":X", replacer);

const getCharactersMessage = replacer =>
  translateKey("form.infoForm.mustContainNCharacters").replace(":N", replacer);

const getDigitsMessage = replacer =>
  translateKey("form.infoForm.mustContainNDigits").replace(":N", replacer);

const titleCase = str =>
  str
    .replace("_", " ")
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export {
  mergeWithDefault,
  addIds,
  limitLength,
  onlyDigits,
  noDigits,
  limitLengthOnlyDigits,
  getInvalidMessage,
  getCharactersMessage,
  getDigitsMessage,
  titleCase,
};
