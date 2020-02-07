import React from "react";
import Header from "./components/Header/Header";
import routes from "./routes";
import { HashRouter } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}
