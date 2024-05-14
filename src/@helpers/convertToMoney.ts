const currencyFormatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 3,
});

export function ConvertToMoney(number: number) {
  return currencyFormatter.format(number)
}