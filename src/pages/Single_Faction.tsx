import { useParams } from "react-router-dom";
import type { Faction } from "../types/Personages";
import { reel_Factions } from "../data/Factions";
import { Get_Faction_Characters, Show_Faction_Card} from "../components/Faction_Card";
import { Solo_card } from "../components/PersoCard";
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
    const colored = reel_Factions[id as Faction].color
    return (
    <div style={{ color: colored, borderColor: colored}}>
        <h1  className="text-3xl flex items-center justify-center gap-3 mb-2">
            <span>{id as Faction}</span>
            <span> <img className="object-contain inline-block text-xs" src={reel_Factions[id as Faction].icon} alt={"PlaceHolder"} width={50} height={50}/> </span>
        </h1>
        <div className="border mb-4"/>
        <h2 className="text-center text-4xl mb-2">- Mécanique de Faction</h2>
        <div className="border-2 mb-4"/>
        <div className="text-3xl flex items-center justify-center gap-3 mb-2"><img src={reel_Factions[id as Faction].img_mecanique} alt="Mécanique img" height={300} width={200} /></div>
        <h2 className="text-center text-4xl mb-2">- Cartes</h2>
        <div className="border-2 mb-4"/>
        <div className="grid grid-cols-4 grid-rows-1 content-around">
            {Get_Faction_Characters(id as Faction).map((Mons) => <div className="flex justify-center items-center"><Solo_card key={Mons.id}chara={Mons}></Solo_card></div>)}
        </div>
        <h2 className="font-Oayues2 text-center text-4xl mb-2">- Sorts</h2>
        <div className="border-2 mb-4"/>
            <div className="grid grid-cols-6 items-center gap-5">
            {Fact_sorts?.map((Sort) => 
                <img src={Sort.img} height={400} width={200}></img>)}
            </div>
    </div>
)}