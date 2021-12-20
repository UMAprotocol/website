const tvlUrl = "https://api.llama.fi/tvl/uma-protocol";
const format = Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}).format;

function fetchTvl() {
  fetch(tvlUrl)
    .then((res) => res.json())
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
