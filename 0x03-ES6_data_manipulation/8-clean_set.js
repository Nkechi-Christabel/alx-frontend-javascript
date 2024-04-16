export default function cleanSet(set, startString) {
  return (startString && startString !== '')
    ? [...set].filter((str) => str && str.startsWith(startString))
      .map((word) => word && word.substring(startString.length)).join('-') : '';
}
