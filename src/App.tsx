import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import PageBackground from "./components/PageBackground";
import Navbar from "./components/Navbar";
import MyFav from "./pages/MyFav";
import { ConfigProvider } from "antd";
import { theme } from "./config/antd.theme.config";

function NavbarOutlet() {
  return (
    <div className="">
      <Navbar />
      <div className=" mt-14">
        <PageBackground />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <BrowserRouter basename="/">
          <Routes>
            <Route element={<NavbarOutlet />}>
              <Route path="/" element={<Pokedex />} />
              <Route path="favourite" element={<MyFav />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
