import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import "./styles/globalstyle.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
