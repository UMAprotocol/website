const tvlUrl = "https://api.umaproject.org/uma-tvl";
const format = Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  maximumFractionDigits: 0,
}).format;

function fetchTvl() {
  fetch(tvlUrl)
    .then((res) => res.json())
    .then((res) => res.currentTvl)
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
