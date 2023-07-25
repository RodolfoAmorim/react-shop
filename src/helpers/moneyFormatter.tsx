export const moneyFormatter = (value: number): string => {
  const moneyFormat = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  })

  return value ? moneyFormat.format(value) : ''
}
