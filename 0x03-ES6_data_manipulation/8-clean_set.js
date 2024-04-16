export default function cleanSet(set, startString) {
  return (startString && startString !== ' ' && typeof startString === 'string')
    ? [...set].filter((str) => str && str.startsWith(startString))
      .map((word) => word.substring(startString.length)).join('-') : ' ';
}
