import { getColorByWordType, WORD_TYPE } from "../utils/table";

export const wordDictionaries = {
  columnNames: ["Kelime", "Anlamı", "Okunuşu"],
  day1: [
    ["beard", "sakal", "/biırd/", getColorByWordType(WORD_TYPE.NOUN)],
    ["building", "bina", "/biılding/", getColorByWordType(WORD_TYPE.NOUN)],
    ["draw", "çizmek", "/drov/", getColorByWordType(WORD_TYPE.VERB)],
    ["ear", "kulak", "/iyır/", getColorByWordType(WORD_TYPE.NOUN)],
    ["hotel", "otel", "/hoteal/", getColorByWordType(WORD_TYPE.NOUN)],
    ["idea", "fikir, öneri", "/aydia/", getColorByWordType(WORD_TYPE.NOUN)],
    ["laugh", "gülmek", "/lauf/", getColorByWordType(WORD_TYPE.VERB)],
    ["minute", "dakika", "/minit/", getColorByWordType(WORD_TYPE.NOUN)],
    ["mountain", "dağ", "/mauntain/", getColorByWordType(WORD_TYPE.NOUN)],
    ["phone", "telefon", "/foun/", getColorByWordType(WORD_TYPE.NOUN)],
    ["photo", "fotoğraf", "/fouto/", getColorByWordType(WORD_TYPE.NOUN)],
    ["police", "polis", "/pıliis/", getColorByWordType(WORD_TYPE.NOUN)],
    ["put", "koy-mak", "/put/", getColorByWordType(WORD_TYPE.VERB)],
  ],
};

export const toBeGrammer = {
  columnNames: ["Kelime", "Anlamı", "Okunuşu"],
  day1: [
    ["beard", "sakal", "/biırd/", getColorByWordType(WORD_TYPE.NOUN)],
    ["building", "bina", "/biılding/", getColorByWordType(WORD_TYPE.NOUN)],
    ["draw", "çizmek", "/drov/", getColorByWordType(WORD_TYPE.VERB)],
    ["ear", "kulak", "/iyır/", getColorByWordType(WORD_TYPE.NOUN)],
    ["hotel", "otel", "/hoteal/", getColorByWordType(WORD_TYPE.NOUN)],
    ["idea", "fikir, öneri", "/aydia/", getColorByWordType(WORD_TYPE.NOUN)],
    ["laugh", "gülmek", "/lauf/", getColorByWordType(WORD_TYPE.VERB)],
    ["minute", "dakika", "/minit/", getColorByWordType(WORD_TYPE.NOUN)],
    ["mountain", "dağ", "/mauntain/", getColorByWordType(WORD_TYPE.NOUN)],
    ["phone", "telefon", "/foun/", getColorByWordType(WORD_TYPE.NOUN)],
    ["photo", "fotoğraf", "/fouto/", getColorByWordType(WORD_TYPE.NOUN)],
    ["police", "polis", "/pıliis/", getColorByWordType(WORD_TYPE.NOUN)],
    ["put", "koy-mak", "/put/", getColorByWordType(WORD_TYPE.VERB)],
  ],
};
