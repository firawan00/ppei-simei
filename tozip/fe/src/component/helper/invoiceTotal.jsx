export function invoiceTotal(data) {
  return data
    .reduce(
      (partialSum, next) =>
        partialSum + Number(next.unitprice) * Number(next.qty),
      0
    )
    .toFixed(2);
}

export function beratotalbruto(data) {
  return data
    .reduce((partialSum, next) => partialSum + Number(next.gweight), 0)
    .toFixed(2);
}

export function beratotalnett(data) {
  return data
    .reduce((partialSum, next) => partialSum + Number(next.nweight), 0)
    .toFixed(2);
}
