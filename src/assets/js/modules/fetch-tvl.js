const tvlUrl = "https://api.llama.fi/oracles";
const format = Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}).format;

function fetchTvl() {
  fetch(tvlUrl)
    .then((res) => res.json())
    .then((data) => data.chart[Object.keys(data.chart)[Object.keys(data.chart).length-1]].UMA.tvl)
    .then((tvl) => format(tvl / 10 ** 6))
    .then((formattedTvl) => {
      console.log({ formattedTvl });
      $("#tvl strong").text(formattedTvl);
    })
    .catch((err) => {
      console.error(err);
      $("#tvl strong").text("$100");
    });
}

export default fetchTvl;
