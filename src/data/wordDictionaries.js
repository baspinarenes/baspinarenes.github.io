import { getColorByWordType, WORD_TYPE } from "../utils/table";

export const wordDictionaries = () => {
  const dictionaries = {
    columnNames: ["Türü", "Kelime", "Anlamı", "Okunuşu"],
    day1: [
      [WORD_TYPE.NOUN, "beard", "sakal", "/biırd/"],
      [WORD_TYPE.NOUN, "building", "bina", "/biılding/"],
      [WORD_TYPE.VERB, "draw", "çizmek", "/drov/"],
      [WORD_TYPE.NOUN, "ear", "kulak", "/iyır/"],
      [WORD_TYPE.NOUN, "hotel", "otel", "/hoteal/"],
      [WORD_TYPE.NOUN, "idea", "fikir, öneri", "/aydia/"],
      [WORD_TYPE.VERB, "laugh", "gülmek", "/lauf/"],
      [WORD_TYPE.NOUN, "minute", "dakika", "/minit/"],
      [WORD_TYPE.NOUN, "mountain", "dağ", "/mauntain/"],
      [WORD_TYPE.NOUN, "phone", "telefon", "/foun/"],
      [WORD_TYPE.NOUN, "photo", "fotoğraf", "/fouto/"],
      [WORD_TYPE.NOUN, "police", "polis", "/pıliis/"],
      [WORD_TYPE.VERB, "put", "koymak", "/put/"],
    ],
    day2: [
      [WORD_TYPE.ADJECTIVE, "cold", "soğuk", "/kould/"],
      [WORD_TYPE.NOUN, "cold", "soğuk algınlığı, nezle, üşümüş", "/kould/"],
      [WORD_TYPE.ADJECTIVE, "favorite", "favori", "/feyvırıt/"],
      [WORD_TYPE.NOUN, "favorite", "favori nesne yada kişi", "/feyvırıt/"],
      [WORD_TYPE.EXCLAMATION, "goodbye", "hoşça kal, güle güle", "/gudbay/"],
      [WORD_TYPE.ADJECTIVE, "heavy", "ağır", "/hevi/"],
      [WORD_TYPE.ADJECTIVE, "hungry", "aç", "/hangri/"],
      [WORD_TYPE.ADJECTIVE, "ill", "hasta, rahatsız", "/iıll/"],
      [WORD_TYPE.ADJECTIVE, "interested", "ilgili, meraklı", "/intrıstıd/"],
      [WORD_TYPE.EXCLAMATION, "please", "lütfen", "/pıliiz/"],
      [WORD_TYPE.NOUN, "politics", "politika, siyaset", "/palıtiks/"],
      [WORD_TYPE.ADJECTIVE, "scared", "korkmuş, tedirgin", "/sıkeyırd/"],
      [WORD_TYPE.ADVERB, "sure", "elbette, tabii ki", "/şurr/"],
      [WORD_TYPE.VERB, "swim", "yüzmek", "/sıviım/"],
      [WORD_TYPE.ADJECTIVE, "tired", "yorgun, bitkin", "/tayırd/"],
      [WORD_TYPE.ADJECTIVE, "warm", "ılık", "/vorm/"],
      [WORD_TYPE.NOUN, "weather", "hava, hava durumu", "/vedır/"],
    ],
    day3: [
      [WORD_TYPE.NOUN, "sandwich", "sandviç", "/sendviç/"],
      [WORD_TYPE.ADJECTIVE, "rich", "zengin", "/riç/"],
      [WORD_TYPE.NOUN, "child", "genç çocuk", "/çayld/"],
      [WORD_TYPE.NOUN, "children", "çocuklar", "/çıldırın/"],
      [WORD_TYPE.NOUN, "daughter", "kız evlat", "/doutır/"],
      [WORD_TYPE.PREPOSITION, "about", "hakkında, ile ilgili", "/abaut/"],
    ],
    day4: [],
    day5: [],
    day6: [
      [WORD_TYPE.NOUN, "rice", "pirinç, pilav", "/rays/"],
      [WORD_TYPE.NOUN, "honey", "sevgilim, canım, tatlım", "/hani/"],
      [WORD_TYPE.ADJECTIVE, "important", "önemli", "/importınt/"],
      [WORD_TYPE.NOUN, "genius", "dahi", "/ciniıs/"],
      [WORD_TYPE.ADJECTIVE, "well", "sağlıklı, iyi", "/veal/"],
    ],
    day7: [],
    day8: [
      [WORD_TYPE.NOUN, "wine", "şarap", "/vayn/"],
      [WORD_TYPE.NOUN, "coffee", "kahve", "/kofi/"],
      [WORD_TYPE.NOUN, "chicken", "tavuk", "/çikın/"],
      [WORD_TYPE.NOUN, "orange", "portakal", "/orınc/"],
      [WORD_TYPE.NOUN, "plate", "tabak", "/pıleyt/"],
      [WORD_TYPE.NOUN, "egg", "yumurta", "/eg/"],
      [WORD_TYPE.NOUN, "pasta", "makarna", "/pasta/"],
      [WORD_TYPE.NOUN, "sugar", "şeker", "/şugır/"],
      [WORD_TYPE.NOUN, "lunch", "öğle yemeği", "/lanç/"],
      [WORD_TYPE.NOUN, "fruit", "meyve", "/fruut/"],
      [WORD_TYPE.NOUN, "cheese", "peynir", "/çiiz/"],
      [WORD_TYPE.NOUN, "juice", "meyve/sebze suyu", "/cüus/"],
      [WORD_TYPE.NOUN, "beef", "sığır eti", "/biif/"],
      [WORD_TYPE.NOUN, "lemon", "limon", "/lemın/"],
      [WORD_TYPE.NOUN, "food", "yiyecek", "/fuud/"],
      [WORD_TYPE.NOUN, "soup", "çorba", "/suup/"],
      [WORD_TYPE.NOUN, "strawberry", "çilek", "/sıtrovberri/"],
      [WORD_TYPE.NOUN, "tomato", "domates", "/tımaato/"],
      [WORD_TYPE.NOUN, "beer", "bira", "/biır/"],
      [WORD_TYPE.NOUN, "oil", "yağ", "/oyıl/"],
      [WORD_TYPE.NOUN, "dinner", "akşam yemeği", "/dinır/"],
      [WORD_TYPE.NOUN, "pork", "domuz eti", "/pork/"],
      [WORD_TYPE.NOUN, "salt", "tuz", "/salt/"],
      [WORD_TYPE.NOUN, "tea", "çay, çay bitkisi", "/tii/"],
      [WORD_TYPE.NOUN, "meat", "et", "/miit/"],
      [WORD_TYPE.NOUN, "vegetarian", "vejeteryan", "/veciteriyın/"],
      [WORD_TYPE.NOUN, "meal", "öğün, yemek", "/miıl/"],
      [WORD_TYPE.NOUN, "bird", "kuş", "/börd/"],
      [WORD_TYPE.NOUN, "horse", "at", "/hors/"],
      [WORD_TYPE.NOUN, "elephant", "fil", "/elıfınt/"],
      [WORD_TYPE.NOUN, "duck", "ördek", "/dak/"],
      [WORD_TYPE.NOUN, "turtle", "kaplumbağa", "/tördıl/"],
      [WORD_TYPE.NOUN, "bear", "ayı", "/beır/"],
      [WORD_TYPE.NOUN, "spider", "örümcek", "/spaydır/"],
      [WORD_TYPE.NOUN, "crab", "yengeç", "/kıreb/"],
      [WORD_TYPE.NOUN, "mouse", "fare", "/maus/"],
      [WORD_TYPE.NOUN, "animal", "hayvan", "/enimıl/"],
    ],
  };

  Object.keys(dictionaries).forEach(key => {
    if (key.startsWith("day")) {
      dictionaries[key]
        .sort((a, b) => a[1].localeCompare(b[1]))
        .forEach(x => {
          x.push(getColorByWordType(x[0]));
        });
    }
  });

  return dictionaries;
};
