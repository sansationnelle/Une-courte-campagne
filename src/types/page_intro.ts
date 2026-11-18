import type { Faction } from "./Personages"
import skelet_boss from "../img/factions_logo/Boss_intro.png"
import skelet_livre from '../img/board_blue.png'
import goblin_boss from "../img/factions_logo/Boss_goblin_intro.png"
import goblin_livre from '../img/board2.png'
import slime_boss from '../img/factions_logo/Boss_slime_intro.png'
import slime_livre from '../img/board_lime.png'

export interface Page_faction {
    id: Number
    faction: Faction
    phrase_intro: String
    Boss_img: String
    color_bg: String
    livre_bg: String
    description: String
}

export const Skelet_page:Page_faction = {
    id: 1,
    faction: "Skelet",
    phrase_intro: "On va casser des Os",
    Boss_img: skelet_boss,
    color_bg: "#001446",
    livre_bg: skelet_livre,
    description: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin."
}

export const Goblin_page:Page_faction = {
    id: 2,
    faction: "Goblin",
    phrase_intro: "Chargé les gablins!",
    Boss_img: goblin_boss,
    color_bg: "#22AA22",
    livre_bg: goblin_livre,
    description: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin."
}

export const Slime_page:Page_faction = {
    id: 3,
    faction: "Slime",
    phrase_intro: "Blurp Bloop Bloop!",
    Boss_img: slime_boss,
    color_bg: "#115511",
    livre_bg: slime_livre,
    description: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin."
}