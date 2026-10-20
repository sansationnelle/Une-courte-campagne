import { useParams } from "react-router-dom";
import type { Faction } from "../types/Personages";
import { reel_Factions } from "../data/Factions";
import { Show_Faction_Card} from "../components/Faction_Card";


export default function Page_Single_faction() {
    const {id} = useParams()
    if (!id) return (<div><h1 className="text-4xl font-bold tracking-tight text-red-900">ERREUR 400, Pas d'id inséré</h1></div>)
    if (!reel_Factions[id as Faction]) return (<div><h1 className="text-4xl font-bold tracking-tight text-red-900">ERREUR 404, Id invalide</h1></div>)
    return (<div><Show_Faction_Card epic={reel_Factions[id as Faction]} /></div>)
}