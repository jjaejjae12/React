import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./home";
import HookUseInput from "./hook/hookUseInput";
import HookUseState from "./hook/hookUseState";
import HookUseTabs from "./hook/hookUseTabs"
import HookUseEffect from "./hook/hookUseEffect";
import HookUseTitle from "./hook/hookUseTitle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/HookUseState" element={<HookUseState />} />
        <Route path="/HookUseInput" element={<HookUseInput />} />
        <Route path="/HookUseTabs" element={<HookUseTabs />} />
        <Route path="/HookUseEffect" element={<HookUseEffect />} />
        <Route path="/HookUseTitle" element={<HookUseTitle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
