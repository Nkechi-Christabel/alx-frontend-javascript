export default function cleanSet(set, startString) {
  return (str && startString !== '')
    ? [...set].filter((str) => str.match(/^(bon)/))
      .map((word) => word.split(startString)[1]).join('-') : '';
}
