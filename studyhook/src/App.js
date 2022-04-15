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
import HookUseClick from "./hook/hookUseClick";
import HookUsePreventLeave from "./hook/hookUsePreventLeave";
import HookUseConfirm from "./hook/hookUse";
import HookUseBeforLeave from "./hook/hookUseBeforLeave";
import HookUseFadeIn from "./hook/hookUseFadeIn";
import HookUseNetwork from "./hook/hookUseNetwork";

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
        <Route path="/HookUseClick" element={<HookUseClick />} />
        <Route path="/HookUsePreventLeave" element={<HookUsePreventLeave />} />
        <Route path="/HookUseConfirm" element={<HookUseConfirm />} />
        <Route path="/HookUseBeforLeave" element={<HookUseBeforLeave />} />
        <Route path="/HookUseFadeIn" element={<HookUseFadeIn />} />
        <Route path="/HookUseNetwork" element={<HookUseNetwork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
