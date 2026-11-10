import type { Faction, True_Faction } from "../types/Personages"
import skelet from "../img/Faction cards/Skelet_card.png"
import slime from "../img/Faction cards/slime_card.png"
import goblin from "../img/Faction cards/goblin_card.png"
import ske_icon from "../img/factions_logo/Skelt_logo.png"
import slime_icon from "../img/factions_logo/Slime_icon.png"
import goblin_icon from "../img/factions_logo/Goblin_icon.png"

export const reel_Factions:Record<Faction, True_Faction>  = { 
    "Skelet": {
        id: 1,
        nom: "Skelet",
        color: "#001446",
        card: skelet,
        icon: ske_icon
    },
    "Goblin": {
        id: 2,
        nom: "Goblin",
        color: "#22AA22",
        card: goblin,
        icon: goblin_icon
    },
    "Slime": {
        id: 3,
        nom: "Slime",
        color: "#115511",
        card: slime,
        icon: slime_icon
    },
    "Mimic" :{
        id: 4,
        nom: "Mimic",
        color: "#888822",
        card: "PlaceHolder",
        icon: "PlaceHolder"
    },
    "Humain": {
        id: 5,
        nom: "Humain",
        color: "#666666",
        card: "PlaceHolder",
        icon: "PlaceHolder"
    },
}