export const WORD_TYPE = {
  NOUN: "noun",
  ADJECTIVE: "adjective",
  VERB: "verb",
  ADVERB: "adverb",
};

export const getColorByWordType = wordType => {
  let color;

  switch (wordType) {
    case "noun":
      color = "yellow";
      break;
    case "adjective":
      color = "green";
      break;
    case "verb":
      color = "blue";
      break;
    case "adverb":
      color = "red";
      break;
    default:
      color = "gray";
      break;
  }

  return {
    color: `text-${color}-500`,
  };
};
