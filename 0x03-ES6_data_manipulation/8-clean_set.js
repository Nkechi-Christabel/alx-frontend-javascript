export default function cleanSet(set, startString) {
  return (startString && startString !== ' ')
    ? [...set].filter((str) => typeof str 'string' && str.startsWith(startString))
      .map((word) => word.slice(startString.length)).join('-') : ' ';
}
