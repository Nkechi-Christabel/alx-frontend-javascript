export default function cleanSet(set, startString) {
  return (startString && startString !== '' && typeof startString === 'string')
    ? [...set].filter((str) => str && str.match(/^(bon)/))
      .map((word) => word.split(startString)[1]).join('-') : '';
}
