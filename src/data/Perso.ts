import type {Perso} from "../types/Personages"
import skelet from "../img/factions_logo/Skelt_logo.png"
import armure_du_roi from "../img/Faction cards/Skelet/Armure_du_roi_dechu.png"
import sk_epee from "../img/Faction cards/Skelet/sk_epee.png"
import sk_arc from "../img/Faction cards/Skelet/sk_arc.png"
import sk_magie from "../img/Faction cards/Skelet/sk_adabra.png"

export const All_CHaracters: Perso[] = [
  {
    id: 1,
    nom: "Goblin",
    categorie: "Boss",
    faction: "Goblin",
    images: "",
    passif: "",
    histoire: "Gablin, ancien pariat du peuple des goblins, revenue après mainte mésaventure. Il as prit le pouvoir par la force dans le domaine des gobelins et y réside en dictateur forçant ses compères à miner de la roche sans fin",
    stats: {att: 5, def: 3, hp: 7, move: 5, range: 3, taille: 5},
  },
  {
    id: 2,
    nom: "Bouliste",
    categorie: "Troupe",
    faction: "Goblin",
    images: "",
    passif: "Pierre qui roule",
    histoire: "",
    stats: {att: 1, def: 5, hp: 2, move: 2, range: 4, taille: 1.5}
  },
  {
    id: 3,
    nom: "Mineur",
    categorie: "Troupe",
    faction: "Goblin",
    images: "",
    passif: "Minage",
    histoire: "",
    stats: {att: 3, def: 2, hp: 3, move: 5, range: 2, taille: 1.5}
  },
  {
    id: 4,
    nom: "Slime Cube",
    categorie: "Boss",
    faction: "Slime",
    images: "",
    passif: "Famine, satiété",
    histoire: "Les Slimes sont une seule et même entité qui se divise pour mieux régner. Chaque membre de cette même espèce partage une seule et même conscience n'ayant qu'un seul but, se nourrir. Un seul contact avec cette masse gélatineuse et c'est fini pour vous.",
    stats: {att: 6, def: 4, hp: 9, move: 1, range: 0, taille: 6}
  },
  {
    id: 5,
    nom: "Armure du Roi déchu (skelet)",
    categorie: "Boss",
    faction: "Skelet",
    images: armure_du_roi,
    passif: "Héritage",
    histoire: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin.",
    stats: {att: 4, def: 5, hp: 7, move: 4, range: 1, taille: 6}
  },
  {
    id: 6,
    nom: "sk'épée",
    categorie: "Troupe",
    faction: "Skelet",
    images: sk_epee,
    passif: "OS-tilité",
    histoire: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin.",
    stats: {att: 2, def: 3, hp: 3, move: 4, range: 2, taille: 2}
  },
  {
    id: 7,
    nom: "sk'arc",
    categorie: "Troupe",
    faction: "Skelet",
    images: sk_arc,
    passif: "OS-Kdur",
    histoire: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin.",
    stats: {att: 3, def: 1, hp: 3, move: 4, range: 6, taille: 2}
  },
  {
    id: 8,
    nom: "sk'adabra",
    categorie: "Troupe",
    faction: "Skelet",
    images: sk_magie,
    passif: "BOB-OS",
    histoire: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin.",
    stats: {att: 2, def: 2, hp: 4, move: 4, range: 4, taille: 2}
  },
]