import skelet from "../img/Faction cards/Skelet_card.png"
import slime from "../img/Faction cards/slime_card.png"

export type Faction = "Goblin" | "Slime" | "Humain" | "Skelet" | "Mimic"

export type True_Faction = {
    id: number,
    nom: Faction
    color: string
    card: string
    icon: string
    img_mecanique: string
}

export interface inter_fact {
    Goblin: string,
    Slime: string,
    Humain: string,
    Skelet: string,
    Mimic: string
}
/** @deprecated */
export const Faction_Color:inter_fact = {
    Goblin: "#22AA22",
    Slime: "#115511",
    Humain: "#666666",
    Skelet: "#001446",
    Mimic: "#888822"
}
/** @deprecated */
export const Faction_card: inter_fact = {
    Goblin: "Placeholder",
    Slime: slime,
    Humain: "Placeholder",
    Skelet: skelet,
    Mimic: "Placeholder"
}
export type Stats = {
    att: number
    def: number
    hp: number
    move: number
    range: number
    taille: number
}

export type Perso = {
    id: number,
    nom: string,
    categorie: "Boss" | "Troupe"
    faction: Faction
    images: string
    passif: string
    histoire: string
    stats: Stats
}