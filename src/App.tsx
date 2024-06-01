import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { Router } from "./routes";

export function App(){
  return <>
  <BrowserRouter>
  <Router/>
  </BrowserRouter>
  <GlobalStyle/></>
}