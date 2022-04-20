import { useState } from "react";
import AppRouter from "./Router";
import {authService} from "fbase";

function App() { 
  const [isLoggedIn, setLoggedIn] = useState(authService.currentUser)
 
  return <AppRouter isLoggedIn={isLoggedIn} />
}

export default App;
