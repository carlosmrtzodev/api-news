import "./Globals.css";
import Fav from "./pages/Fav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Routes for pages.
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
