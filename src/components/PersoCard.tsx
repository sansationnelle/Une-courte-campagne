import { reel_Factions } from "../data/Factions";
import { type Perso } from "../types/Personages";
import { colorChange } from "./utilis/Current_text_color";
import { Get_border_color } from "./utilis/light-dark_mode";

type All_Props = {
  All_Perso: Perso[];
};

type Single = {
    gamer: Perso
}

export const Single_Perso_Card = ({gamer}: Single) => {
    /* Montre toutes les infos d'un seul personage*/
    return (
    <div className="whitespace-pre-line">
        <h1 className="text-7xl mb-3">{gamer.nom}</h1><br/>
        <div className="text-left text-2xl">
            <p className="text-center text-3xl mb-5"> - Faction:<span style={{color: colorChange(reel_Factions[gamer.faction].color, {mode: "light", value: 70})}}> {gamer.faction}</span> type: {gamer.categorie}</p>
            <p className="mb-2">- PV: {gamer.stats.hp}</p>
            <p className="mb-2">- ATT: {gamer.stats.att}</p>
            <p className="mb-2">- DEF: {gamer.stats.def}</p>
            <p className="mb-2">- Déplacement: {gamer.stats.move}  </p>
            <p className="mb-2">- Portée: {gamer.stats.range}</p>
            <p className="mb-2">- Taille: {gamer.stats.taille}m</p>
            <p className="mb-2">- passifs: {gamer.passif}</p>
        {/*Lore: {gamer.histoire}*/}
        </div>
    </div>
    );
}

export const Solo_card = ({chara}: {chara: Perso}) => {
    return (
        <div>
            {chara.categorie == "Boss"? <img className="hover:scale-130" src={chara.images} alt={chara.nom + " carte"} width={150} height={400} />:<img className="hover:scale-130" src={chara.images} alt={chara.nom + " carte"} width={100} height={350} />}
        </div>
    )
}

export const All_Perso_card = ({All_Perso} :All_Props) => {
    return (
    <div className="">
        {All_Perso.map((Monst)=> (<div style={{borderColor: Get_border_color()}} className= "grid grid-rows-1 pt-4"><div style={{borderColor: Get_border_color()}} className="w-1/2 mx-auto border-5 h-[1px] mb-4" /><Single_Perso_Card gamer={Monst}/></div>))}
    </div>);
}