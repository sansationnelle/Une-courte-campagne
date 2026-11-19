import { Link } from "react-router-dom";
import { All_Faction_Card} from "../components/Faction_Card";
import { colorChange } from "../components/utilis/Current_text_color";
import { Get_bg_color } from "../components/utilis/light-dark_mode";
import { reel_Factions } from "../data/Factions";
import { All_CHaracters } from "../data/Perso";
import type { Faction } from "../types/Personages";

const Personages = () => {
    const keys = Object.keys(reel_Factions)
    return (
        <div className="w-full">
            <div className="mb-5"/>
            <h1 style={{color: colorChange("#EDB657", {mode: "light", value:0})}} className="text-center text-5xl mb-4">Factions</h1>
            <h1 style={{color: colorChange("#EDB657", {mode: "light", value:0})}} className="text-center text-2xl mb-4">Tome 1 - Pour la gloire</h1>
            <div style={{backgroundColor:  colorChange(Get_bg_color(), {mode: "light", value:50})}} className="justify-center mx-24 py-10 rounded-4xl">
                <div  className="grid grid-cols-5 place-items-center md-5 gap-5">
                    {keys.map((fact) => (
                    <Link to={`../faction/${reel_Factions[fact as Faction].nom}`}>
                        <div style={{color: reel_Factions[fact as Faction].color, borderColor: colorChange("#EDB657", {mode: "light", value:0}), backgroundColor: colorChange(Get_bg_color(), {mode: "dark", value:5})}} className="flex flex-col border-2 h-24 w-24 px-3 py-2 justify-center items-center">
                            <img src={reel_Factions[fact as Faction].icon} width={50} height={50} className="object-center"></img>
                            <p>{reel_Factions[fact as Faction].nom}</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Personages;