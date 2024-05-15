export function priceFormatter(price: number | string) {
  const formatter = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 3,
  })
  return formatter.format(Number(price))
}

export function dateFormatter(date: string) {
  const formatter = Intl.DateTimeFormat("pt-BR");
  return formatter.format(new Date(date))
}