import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

const Home = React.lazy(() => import("./Pages/Home/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default App;
