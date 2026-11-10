import { useParams } from "react-router-dom";
import type { Faction } from "../types/Personages";
import { reel_Factions } from "../data/Factions";
import { Show_Faction_Card} from "../components/Faction_Card";
import { Get_border_color, Get_text_color } from "../components/utilis/light-dark_mode";
import type{ Sorts } from "../types/sorts";
import { Goblin_magie, Skelet_magie, Slime_magie } from "../data/sortilege";
function Get_Sorts(faction: Faction):Sorts[]{
    if (faction == "Skelet"){
        return Skelet_magie
    }
    if (faction == "Goblin"){
        return Goblin_magie
    }
    if (faction == "Slime"){
        return Slime_magie
    }
    return []
}


export default function Page_Single_faction() {
    const {id} = useParams()
    if (!id) return (<div><h1 className="text-4xl font-bold tracking-tight text-red-900">ERREUR 400, Pas d'id inséré</h1></div>)
    if (!reel_Factions[id as Faction]) return (<div><h1 className="text-4xl font-bold tracking-tight text-red-900">ERREUR 404, Id invalide</h1></div>)
    const Fact_sorts = Get_Sorts(id as Faction)
    return (
    <div>
        <h2 style={{color: Get_text_color()}}className="text-center text-4xl mb-2">- Cartes</h2>
        <Show_Faction_Card epic={reel_Factions[id as Faction]} />
        <h2 style={{color: Get_text_color()}}className="font-Oayues2 text-center text-4xl mb-2">- Sorts</h2>
        <div style={{borderColor: Get_text_color()}}className="border-2 mb-4"></div>
            <div className="grid grid-cols-6 items-center gap-5">
            {Fact_sorts?.map((Sort) => 
                <img src={Sort.img} height={400} width={200}></img>)}
            </div>
    </div>)
}