const searchRegexFromEnd = (string, regex) => {
  const matches = [...string.matchAll(regex)];
  
  if (matches.length === 0) return -1;

  const lastMatch = matches[matches.length - 1];

  return lastMatch.index;
}

const truncateString = (string, maxLength) => {
  if (string.length <= maxLength) return string;

  const punctuationAndSpaceRegex = /[ ,.!?:;]/g;
  const ending = "...";

  const shortenedString = string.slice(0, maxLength);
  
  const lastPunctuationIndex = searchRegexFromEnd(shortenedString, punctuationAndSpaceRegex);

  if (lastPunctuationIndex === -1) return string;

  return shortenedString.slice(0, lastPunctuationIndex).trim() + ending;
}
