export const WORD_TYPE = {
  NOUN: "noun",
  ADJECTIVE: "adjective",
  VERB: "verb",
  ADVERB: "adverb",
  EXCLAMATION: "exclamation",
  PREPOSITION: "preposition",
  PRONOUN: "pronoun",
};

export const getColorByWordType = wordType => {
  let color;

  switch (wordType) {
    case "noun":
      color = "text-yellow-500";
      break;
    case "adjective":
      color = "text-green-500";
      break;
    case "verb":
      color = "text-blue-500";
      break;
    case "adverb":
      color = "text-red-500";
      break;
    case "exclamation":
      color = "text-pink-500";
      break;
    case "preposition":
      color = "text-purple-500";
      break;
    case "pronoun":
      color = "text-indigo-500";
      break;
    default:
      color = "text-gray-500";
      break;
  }

  return { color };
};
