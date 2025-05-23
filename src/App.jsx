import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/index";
import Home from "./pages/home";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:country" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
