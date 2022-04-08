import { useEffect, useState } from "react";

function Hello() {
  // function byFn() {
  //   console.log("bye :(")
  // }
  // function hiFn() {
  //   console.log("created :)")
  //   return byFn;
  // }
  // useEffect(hiFn,[])
  useEffect(
    () => {
      console.log("hi :)")
      return () => console.log("bye :(")
    },[])
  return <h1>Hello</h1>;
}
function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing && <Hello />}
      <button onClick={onClick}>{showing ? "Hiden" : "Show"}</button>
    </div>
  );
}

export default App;
