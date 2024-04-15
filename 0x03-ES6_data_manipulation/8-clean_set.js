export default function cleanSet(set, startString) {
  return (set && startString && startString !== '')
    ? [...set].filter((str) => str.match(/^(bon)/))
      .map((word) => word.split(startString)[1]).join('-') : '';
}
