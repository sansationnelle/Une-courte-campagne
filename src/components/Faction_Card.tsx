import {type Faction, type Perso, type True_Faction } from "../types/Personages";
import { Get_bg_color, Get_border_color, Get_text_color } from "./utilis/light-dark_mode";
import {reel_Factions} from "../data/Factions"
import { Link } from "react-router-dom";
import { Skelet_magie } from "../data/sortilege";
import type { Sorts } from "../types/sorts";
import { All_CHaracters } from "../data/Perso";
import { Single_Perso_Card } from "./PersoCard";
import type { Page_faction } from "../types/page_intro";
import { colorChange } from "./utilis/Current_text_color";

type Faction_Props = {
    faction: Faction
    team: Perso[]
}

function Boss_First(elteam:Perso[]){
    if (elteam[0].categorie == "Boss") return elteam
    for (let i = 0; i < elteam.length; i ++){
        if (elteam[i].categorie == "Boss"){
            const temp = elteam[0]
            elteam[0] = elteam[i]
            elteam[i] = temp
            return elteam
        }
    }
    return elteam
}

function sort_by_faction(All_chara: Perso[]):Faction_Props[] {
    const tab_of_fact:Record<string, Faction_Props> = {}
    for (let chara of All_chara){
        if (!tab_of_fact[chara.faction]){
            tab_of_fact[chara.faction] = {faction: chara.faction, team: [],}
        }
        tab_of_fact[chara.faction].team.push(chara);
    }
    return Object.values(tab_of_fact)
}

export function Get_Faction_Characters(fact:Faction){
    const fact_chara:Perso[] = []
    for (let chara of All_CHaracters){
        if (chara.faction == fact){
            fact_chara.push(chara)
        }
    }
    return fact_chara
}

export const All_Faction_Card = ({all_chara} : {all_chara: Perso[]}) => {
    const sorted_tab = sort_by_faction(all_chara)
    return (
    <div>
        {sorted_tab.map((faction) => <Single_Faction_Card equipe={faction} />)}
    </div>
    )
}

export const Show_Faction_Card = ({epic}: {epic: True_Faction}) =>{
    return (
        <div  className="mb-6">
            <div style={{borderColor: Get_text_color()}}className="border-2 mb-4"></div>
            <Link to={`../faction/${epic.nom}`}>
            <img className="object-contain text-center flex items-center justify-center text-3xl" style={{display: "block" ,margin: "auto"}} src={epic.card} alt={"Placeholder"} width={750} height={375} />
            </Link>
        </div>
    )
}

const Single_Faction_Card = ({equipe}: {equipe: Faction_Props}) => {
    const sorted_team = Boss_First(equipe.team)
    if (sorted_team.length == 0) return (<p>Pas de Personage dans la faction <span style={{color: reel_Factions[equipe.faction].color}}/>{equipe.faction}</p>)
    return (
        <div className="pt-4 text-xl mb-6" style={{color: Get_text_color(), borderColor: Get_border_color()}}>
            <div className="mb-4">
                    <h1 style={{ color: reel_Factions[equipe.faction].color}} className="text-3xl flex items-center justify-center gap-3">
                        <span>{equipe.faction}</span>
                        <span> <img className="object-contain inline-block text-xs" src={reel_Factions[equipe.faction].icon} alt={"PlaceHolder"} width={50} height={50}/> </span>
                </h1>
            </div>
            <h2 style={{color: Get_text_color()}}className="text-center text-4xl mb-2">Deck</h2>
            {<Show_Faction_Card epic={reel_Factions[equipe.faction]} />}
            {/*<All_Perso_card All_Perso={sorted_team} />*/}
        </div>
    );
}

export const Single_faction_stats = ({fact}: {fact: Page_faction}) => {
    const facti = sort_by_faction(All_CHaracters).filter((val) => val.faction == fact.faction)
    const team = Boss_First(facti[0].team)
    const Cur_fact = reel_Factions[fact.faction]
    return (
        <>
            {team.map((persos) => (
                <div style={{backgroundImage: `url(${fact.livre_bg})`, backgroundColor: colorChange(Cur_fact.color), borderColor: Get_border_color()}} className="border-2 whitespace-pre-line text-center h-dvh">
                    <div className="mb-7"/>
                            <div style={{ backgroundImage: `url(${persos.images})`, backgroundSize: '250px 240px'}} className="min-h-screen bg-no-repeat bg-right">
                        {/* texte*/}
                        <div style={{color:colorChange("#EDB657", {mode: "light", value:0})}} className="text-top">
                            <Single_Perso_Card gamer={persos}/>
                        </div>
                    </div>
                </div>
        ))}
        </>
    )
}