import React from "react";
import Header from "./Components/Header/Header.js";
import AllBtns from "./Components/AllBtns/Btns.jsx";
import Navbar from "./Components/Navbar/Navbar.js";
import Maksibox from "./Components/Макси Бокс/MaksiBoks.jsx";
import Sendvich from "./Components/Клаб-Сэндвич/Sendvich.jsx";
import Lavash from "./Components/Лаваш/Lavash.jsx";
import Shaurma from "./Components/Шаурма/Shaurma.jsx";
import Burger from "./Components/Бургеры/Burger.jsx";
import Hotdog from "./Components/Хот-Дог/Hotdog.jsx";
import Donar from "./Components/Донар Кебаб/Донар Кебаб.jsx";
import Bagget from "./Components/Bagget/Bagget.jsx";
import Snek from "./Components/Снеки/Snek.jsx";
import Napitka from "./Components/Напитки/Napitka.jsx";
import Desert from "./Components/Десерты/Desert.jsx";
import Sous from "./Components/Соусы/Sous.jsx";
import Footer from "../src/Components/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <AllBtns />
      <Maksibox />
      <Sendvich />
      <Lavash />
      <Shaurma />
      <Donar/>
      <Bagget/>
      <Burger />
      <Hotdog />
      <Snek/>
      <Napitka/>
      <Desert/>
      <Sous/>
      <Footer/>
    </div>
  );
};

export default Home;
