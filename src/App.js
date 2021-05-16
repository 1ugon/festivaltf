import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import "./styles/globalstyle.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  );
}

export default App;
