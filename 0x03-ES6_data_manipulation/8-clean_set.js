export default function cleanSet(set, startString) {
  return (typeof startString === 'string' && startString !== ' ')
    ? [...set].filter((str) => str && str.startsWith(startString))
      .map((word) => word.substring(startString.length)).join('-') : ' ';
}
