export default function cleanSet(set, startString) {
  return (startString && startString !== '')
    ? [...set].filter((str) => typeof str === 'string' && str.match(/^(bon)/))
      .map((word) => word.split(startString)[1]).join('-') : '';
}
