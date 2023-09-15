export function toCelsius(farenhite) {
  return ((farenhite - 32) * 5) / 9;
}

export function toFarenhite(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convert(temperature, convertTo) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertTo(input);
  const round = Math.round(output * 1000) / 1000;
  return round.toString();
}
