import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import NotFoundPage from "./pages/NotFoundPage";
import Page_Acceuil from "./pages/Accueil";
import Personages from "./pages/List_persos";
import Page_faction from "./pages/List_factions_page"
import Single_Faction from "./pages/Single_Faction"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Page_Acceuil />} />
            <Route path="/factions" element={<Page_faction />}/>
            <Route path="/faction" element={<Single_Faction />}/>
            <Route path="/faction/:id" element={<Single_Faction />}/>
            <Route path="/regles" element={<Page_Acceuil />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
