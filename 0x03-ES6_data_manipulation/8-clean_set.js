export default function cleanSet(set, startString) {
  return (typeof startString === 'string' && startString !== '')
    ? [...set].filter((str) => str && str.match(/^(bon)/))
      .map((word) => word.split(startString)[1]).join('-') : '';
}
