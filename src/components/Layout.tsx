import { NavLink, Outlet } from "react-router-dom";
import logo from '../img/logo.png';
import { Get_bg_color, Get_header_color } from "./utilis/light-dark_mode";

const links = [
  { to: "/", label: "Accueil", end: false },
];

const hovercss = "p-2 bg-amber-900/60 text-amber-400 border-2 border-amber-700/60 rounded-xl gap hover:text-amber-200 hover:underline hover:bg-amber-900 hover:border-amber-700 transition-colors  duration-200 cursor-pointer "

const Layout = () => {

  return (
    <div style={{backgroundColor: Get_bg_color()}} className="flex min-h-screen flex-col font-Oayues2">
      <header style={{backgroundColor: Get_header_color()}} className="shadow-md">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-4 px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-white">
            <img src={logo} width={50} height={50} className="fit-picture" alt="Une Courte Campagne"></img>
          </span>
        <nav className="flex gap-10 font-Oayues2 self-center">
        <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold " : "") + hovercss}>Accueil</NavLink>
        <NavLink to="/regles" className={({ isActive }) => (isActive ? "font-bold " : "")+ hovercss}>Règles</NavLink>
        <NavLink to="/factions" className={({ isActive }) => (isActive ? "font-bold " : "")+ hovercss}>Factions</NavLink>
        </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
        <Outlet />
      </main>
      <footer className="text-center text-[#806943] bottom-0 p-4">Une Courte Campagne 2026</footer>
    </div>
  );
};

export default Layout;