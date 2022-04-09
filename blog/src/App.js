import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=4703").then(response =>
      response.json()
    ).then(json => {
      console.log(json);
      setCoins(json)
      setLoading(false);
    });
  }, [])
  const CoinUSD = () => (
    <ul>
      {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</li>)}
    </ul>
  )
  return (
    <div>
      <h1>The Coins!{loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <CoinUSD />}
    </div>
  );
}

export default App;
