/* eslint-disable import/prefer-default-export */
import { BeautifiedPostCategoryNamesByName } from "models/post";

const beautifiedPostCategoryNamesByName: BeautifiedPostCategoryNamesByName = {
  "genel-programlama": "Genel Programlama",
  "hayatin-icinden": "Hayatın İçinden",
  ubuntu: "Ubuntu",
};

const getBeautifiedPostCategoryName = (rawCategoryName: string): string =>
  beautifiedPostCategoryNamesByName[rawCategoryName];

export { getBeautifiedPostCategoryName };
