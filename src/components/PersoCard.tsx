import { reel_Factions } from "../data/Factions";
import { type Perso } from "../types/Personages";
import { Get_border_color } from "./utilis/light-dark_mode";

type All_Props = {
  All_Perso: Perso[];
};

type Single = {
    gamer: Perso
}
/** @deprecated */
export const Single_Perso_Card = ({gamer}: Single) => {
    /* Montre toutes les infos d'un seul personage*/
    return (
    <div className="text-4xl">
        <p >Nom: {gamer.nom}<br/>
        Faction:<span style={{color: reel_Factions[gamer.faction].color}}> {gamer.faction}</span><br/>
        Stats: PV: {gamer.stats.hp} ATT: {gamer.stats.att} DEF: {gamer.stats.def}<br/>
        Déplacement: {gamer.stats.move} Portée: {gamer.stats.range} Taille: {gamer.stats.taille}m<br/>
        Lore: {gamer.histoire}</p>
    </div>
    );
}

export const All_Perso_card = ({All_Perso} :All_Props) => {
    return (
    <div className="">
        {All_Perso.map((Monst)=> (<div style={{borderColor: Get_border_color()}} className= "grid grid-rows-1 pt-4"><div style={{borderColor: Get_border_color()}} className="w-1/2 mx-auto border-5 h-[1px] mb-4" /><Single_Perso_Card gamer={Monst}/></div>))}
    </div>);
}