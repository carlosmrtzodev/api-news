import "./Globals.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Favorites } from "./pages/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
