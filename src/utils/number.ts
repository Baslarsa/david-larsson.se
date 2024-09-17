export const valueMaxDecimals = (value: number, decimals: number = 3) => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};
