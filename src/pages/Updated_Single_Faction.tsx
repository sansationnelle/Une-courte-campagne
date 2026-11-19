import { useParams } from "react-router-dom"
import { reel_Factions } from "../data/Factions"
import type { Faction, True_Faction } from "../types/Personages"
import { Skelet_page, Goblin_page, Slime_page, type Page_faction } from "../types/page_intro"
import { colorChange, Current_color } from "../components/utilis/Current_text_color"
import { Get_border_color } from "../components/utilis/light-dark_mode"
import backg from "../img/board_blue.png"
import { Single_faction_stats } from "../components/Faction_Card"

function get_page_fact(fact:Faction):Page_faction {
    if (fact == "Skelet"){
        return Skelet_page
    }
    if (fact == "Goblin"){
        return Goblin_page
    }
    if (fact == "Slime"){
        return Slime_page
    }
    return Skelet_page
}

const Illustration_Faction = () => {
    const {id} = useParams()
    if (!id) return (<div><h1 className="text-4xl font-bold tracking-tight text-red-900">ERREUR 400, Pas d'id inséré</h1></div>)
    if (!reel_Factions[id as Faction]) return (<div><h1 className="text-4xl font-bold tracking-tight text-red-900">ERREUR 404, Id invalide</h1></div>)
    const Cur_fact:True_Faction = reel_Factions[id as Faction]
    const Page_fact:Page_faction = get_page_fact(Cur_fact.nom)
    console.log(Cur_fact.nom)
    return (
    <div className="px-64">
        {/* Page illustration d'intro */}
        <div style={{color:colorChange("#EDB657", {mode: "light", value:0})}} className="mb-2"></div>
        <div style={{backgroundImage: `url(${Page_fact.livre_bg})`, backgroundColor: colorChange(reel_Factions[id as Faction].color), borderColor: Get_border_color()}} className="h-dvh border-l-3 border-r-3 border-s-5 border-t-3">
            <div style={{ backgroundImage: `url(${Page_fact.Boss_img})`, backgroundSize: '300px 280px'}} className="min-h-screen bg-no-repeat bg-center">
                {/* nom de faction + icon*/}
                <h1  className="text-3xl flex items-center justify-center gap-3 mb-2">
                    <span style={{color: colorChange(reel_Factions[id as Faction].color, {mode: "light", value: 40})}}>{Cur_fact.nom}</span>
                    <span> <img className="object-contain inline-block text-xs" src={Cur_fact.icon} alt={"PlaceHolder"} width={50} height={50}/> </span>
                </h1>
                {/* texte*/}
                <div className="flex flex-col items-center">
                    <div className="inline-block">
                        <h3 style={{color: colorChange(Cur_fact.color, {mode: "light", value: 60})}} className="text-3xl text-center mb">- {Page_fact.phrase_intro}</h3>
                        <h3 style={{color: colorChange(Cur_fact.color, {mode: "light", value: 40})}} className="text-xl text-right">- un skelet</h3>
                    </div>
                </div>
            </div>
        </div>
        {/* Page de faction */}
        <div style={{color:colorChange("#EDB657", {mode: "light", value:0}), backgroundImage: `url(${Page_fact.livre_bg})`, backgroundColor: colorChange(Cur_fact.color), borderColor: Get_border_color()}} className="border-2 whitespace-pre-line text-center h-dvh">
            <h2 style={{color: colorChange(Cur_fact.color, {value:50})}} className="text-center mb-2">Lore du {Cur_fact.nom}</h2>
            {Page_fact.description}
        </div>
        {/* page de des mécaniques de factions*/}
        <div style={{color:colorChange("#EDB657", {mode: "light", value:0}),backgroundImage: `url(${Page_fact.livre_bg})`, backgroundColor: colorChange(Cur_fact.color), borderColor: Get_border_color()}} className="border-2 whitespace-pre-line text-center h-dvh">
            <div className="mb-3"></div>
            <h1 className="text-5xl mb-3">Mécaniques de factions</h1>
            <p>{Page_fact.Mecanique_txt}</p>
        </div>
        {/* Page de stats */}
        <Single_faction_stats fact={Page_fact}></Single_faction_stats>
    </div>
    )
}

export default Illustration_Faction;