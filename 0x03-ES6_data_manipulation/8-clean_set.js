export default function cleanSet(set, startString) {
  return (startString && string.length !== 0)
    ? [...set].filter((str) => str && str.startsWith(startString))
      .map((word) => word.substring(startString.length)).join('-') : '';
}
