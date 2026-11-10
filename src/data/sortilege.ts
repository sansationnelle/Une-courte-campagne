import type { Sorts } from "../types/sorts";
// Skelet
import def_roy from "../img/Sorts/Skelet/defence_royale.png"
import gros_os from "../img/Sorts/Skelet/Gros_os.png"
import seisme from "../img/Sorts/Skelet/OS_eisme.png"
import Rue_Roi from "../img/Sorts/Skelet/rue_du_roi.png"
import fuyard from "../img/Sorts/Skelet/Tactique_du_femur_fuyard.png"
import soin_tombe from "../img/Sorts/Skelet/Soin_d_outre_tombe.png"
import Mauvais_os from "../img/Sorts/Skelet/Mauvais_jusqu_au_os.png"
import Osra_pas from "../img/Sorts/Skelet/tu_m_os_rra_pas.png"
import ExSklibur from "../img/Sorts/Skelet/Ex_Sk_alibur.png"
import Hdini from "../img/Sorts/Skelet/H_Os_dini.png"
import Ostent from "../img/Sorts/Skelet/Os_t_entatoire.png"
import ExplOSion from "../img/Sorts/Skelet/Expl_Os_ion.png"
//Goblin
import Pile_de_silex from "../img/Sorts/Goblin/Pile_de_silex.png"
import Voyage_sous_terrain from "../img/Sorts/Goblin/Voyage_Sous_terrain.png"
import Jet_de_grav from "../img/Sorts/Goblin/Jet_de_Gravier.png"
import Gablin_shot from "../img/Sorts/Goblin/Gablin_Shot.png"
import Effondrement from "../img/Sorts/Goblin/Effondrement.png"
import Filon_de_roche from "../img/Sorts/Goblin/Filon_de_roche.png"
import Armure_de_roche from "../img/Sorts/Goblin/Armure_de_Roche.png"
import Ponce_roche from "../img/Sorts/Goblin/Ponce_Roche.png"
import Rep_cailloux from "../img/Sorts/Goblin/reparation_de_cailloux.png"
import a_la_mine from "../img/Sorts/Goblin/a_la_mine.png"
import tri_de_roche from "../img/Sorts/Goblin/Tri_de_roche.png"
import undertale from "../img/Sorts/Goblin/Determination.png"
// Slime
import Bouclier_Vis from "../img/Sorts/Slime/Bouclier_Visqueux.png"
import Angle_arroundi from "../img/Sorts/Slime/Angle_Arrondit.png"
import Flasque_slime from "../img/Sorts/Slime/Flasque_de_slime.png"
import Trans from "../img/Sorts/Slime/Transmutation.png"
import Saut from "../img/Sorts/Slime/Saut.png"
import Slime_roule from "../img/Sorts/Slime/Slime_qui_roule.png"
import Ciao from "../img/Sorts/Slime/c_est_ciao.png"
import Crachat from "../img/Sorts/Slime/Crachat.png"
import Crachat2 from "../img/Sorts/Slime/Crachat2.png"
import Placeholder from "../img/Sorts/Slime/PlaceHolder.png"
import Placeholder2 from "../img/Sorts/Slime/PlaceHolder2.png"
import Placeholder3 from "../img/Sorts/Slime/PlaceHolder3.png"

export const Skelet_magie:Sorts[] = [
    {
        id: 1,
        nom: "Défence Royale",
        img: def_roy
    },
    {
        id: 2,
        nom: "Gros Os",
        img: gros_os
    },
    {
        id: 3,
        nom: "OS'eisme",
        img: seisme
    },
    {
        id: 4,
        nom: "Rué du Roi",
        img: Rue_Roi
    },
    {
        id: 5,
        nom: "Tactique du fémur fuyard",
        img: fuyard
    },
    {
        id: 6,
        nom: "Soin d'outre tombe",
        img: soin_tombe
    },
    {
        id: 7,
        nom: "Mauvais jusqu'au Os",
        img: Mauvais_os
    },
    {
        id: 8,
        nom: "Tu n'Os-rra pas",
        img: Osra_pas
    },
    {
        id: 9,
        nom: "Ex-Sk'Ailibur",
        img: ExSklibur
    },
    {
        id: 10,
        nom: "H'OS-dini",
        img: Hdini
    },
    {
        id: 11,
        nom: "Os-t'entatoire",
        img: Ostent
    },
    {
        id: 12,
        nom: "Expl'Os-ion",
        img: ExplOSion
    }
]

export const Goblin_magie:Sorts[] = [
    {
        id: 1,
        nom: "Pile de silex",
        img: Pile_de_silex
    },
    {
        id: 2,
        nom: "Voyages Sous-terrain",
        img: Voyage_sous_terrain
    },
    {
        id: 3,
        nom: "Jet de Gravier",
        img: Jet_de_grav
    },
    {
        id: 4,
        nom: "Gablin Shot",
        img: Gablin_shot
    },
    {
        id: 5,
        nom: "Effondrement",
        img: Effondrement
    },
    {
        id: 6,
        nom: "Filon de roche",
        img: Filon_de_roche
    },
    {
        id: 7,
        nom: "Armure de Roche",
        img: Armure_de_roche
    },
    {
        id: 8,
        nom: "Ponce Roche",
        img: Ponce_roche
    },
    {
        id: 9,
        nom: "Réparation de Cailloux",
        img: Rep_cailloux
    },
    {
        id: 10,
        nom: "À la Mine!",
        img: a_la_mine
    },
    {
        id: 11,
        nom: "Tri de Roche",
        img: tri_de_roche
    },
    {
        id: 12,
        nom: "Détermination",
        img: undertale
    }
]

export const Slime_magie:Sorts[] = [
    {
        id: 1,
        nom: "Bouclier Visqueux",
        img: Bouclier_Vis
    },
    {
        id: 2,
        nom: "Angle Arrondit",
        img: Angle_arroundi
    },
    {
        id: 3,
        nom: "Crachat2",
        img: Crachat2
    },
    {
        id: 4,
        nom: "Flasque de Slime",
        img: Flasque_slime
    },
    {
        id: 5,
        nom: "Transmutation",
        img: Trans
    },
    {
        id: 6,
        nom: "Saut",
        img: Saut
    },
    {
        id: 7,
        nom: "Slime qui Roule...",
        img: Slime_roule
    },
    {
        id: 8,
        nom: "C'est Ciao",
        img: Ciao
    },
    {
        id: 9,
        nom: "Crachat",
        img: Crachat
    },
    {
        id: 10,
        nom: "PlaceHolder",
        img: Placeholder
    },
    {
        id: 11,
        nom: "PlaceHolder2",
        img: Placeholder2
    },
    {
        id: 12,
        nom: "PlaceHolder3",
        img: Placeholder3
    },
]