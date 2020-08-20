const formatCurrency = (value) => {
  const numberFormatted = new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);
  return numberFormatted.replace(",", "*").replace(".", ",").replace("*", ".");
};

export default formatCurrency;
