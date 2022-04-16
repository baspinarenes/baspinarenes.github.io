const getLocaleDateString = (dateString: string) => {
  const date = new Date(dateString);

  if (!date) {
    return "";
  }

  return `0${date.toLocaleString("tr-TR", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`.replace(/^0(?=\d{2})/, "");
};

const getPreviousDay = (date = new Date()) => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return getLocaleDateString(previous.toLocaleDateString());
};

export { getLocaleDateString, getPreviousDay };
