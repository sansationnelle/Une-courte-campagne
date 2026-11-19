import type {Perso} from "../types/Personages"
import skelet from "../img/factions_logo/Skelt_logo.png"
import armure_du_roi from "../img/Faction cards/Skelet/SK_B1_RoiDechu.png"
import sk_epee from "../img/Faction cards/Skelet/SK_T1_Skepee.png"
import sk_arc from "../img/Faction cards/Skelet/SK_T2_Skarc.png"
import sk_magie from "../img/Faction cards/Skelet/SK_T3_Skadabra.png"

import gb_Boss from "../img/Faction cards/Goblin/Boss_goblin.png"
import gb_mineur from "../img/Faction cards/Goblin/GB_T2_Mineur.png"
import gb_bouliste from "../img/Faction cards/Goblin/GB_T1_Bouliste.png"

import sli_Boss from "../img/Faction cards/Slime/Boss_slime_intro.png"
import sli_glups from "../img/Faction cards/Slime/SL_T1_Gloops_jt.png"
import sli_sloops from "../img/Faction cards/Slime/SL_T2_Swomp_jt.png"
import sli_swaps from "../img/Faction cards/Slime/SL_T3_Swamp_jt.png"

export const All_CHaracters: Perso[] = [
  {
    id: 1,
    nom: "Goblin",
    categorie: "Boss",
    faction: "Goblin",
    images: gb_Boss,
    passif: "",
    histoire: "Gablin, ancien pariat du peuple des goblins, revenue après mainte mésaventure. Il as prit le pouvoir par la force dans le domaine des gobelins et y réside en dictateur forçant ses compères à miner de la roche sans fin",
    stats: {att: 5, def: 3, hp: 7, move: 5, range: 3, taille: 5},
  },
  {
    id: 2,
    nom: "Bouliste",
    categorie: "Troupe",
    faction: "Goblin",
    images: gb_bouliste,
    passif: "Pierre qui roule",
    histoire: "",
    stats: {att: 1, def: 5, hp: 2, move: 2, range: 4, taille: 3}
  },
  {
    id: 3,
    nom: "Mineur",
    categorie: "Troupe",
    faction: "Goblin",
    images: gb_mineur,
    passif: "Minage",
    histoire: "",
    stats: {att: 3, def: 2, hp: 3, move: 5, range: 2, taille: 3}
  },
  {
    id: 4,
    nom: "Slime Cube",
    categorie: "Boss",
    faction: "Slime",
    images: sli_Boss,
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
    stats: {att: 2, def: 3, hp: 3, move: 4, range: 2, taille: 3}
  },
  {
    id: 7,
    nom: "sk'arc",
    categorie: "Troupe",
    faction: "Skelet",
    images: sk_arc,
    passif: "OS-Kdur",
    histoire: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin.",
    stats: {att: 3, def: 1, hp: 3, move: 4, range: 6, taille: 3}
  },
  {
    id: 8,
    nom: "sk'adabra",
    categorie: "Troupe",
    faction: "Skelet",
    images: sk_magie,
    passif: "BOB-OS",
    histoire: "On raconte que cette armure appartenait autre fois à un homme si riche et si puissant qu'il contrôlé presque toute les terres. son avidité au pouvoir et à la guerre à eu raison de lui et seul son fière acier resta après sa mort. ses soldats maudits par les actes de leur roi, ils voulaient le pouvoir, ils ont eu la vie éternel au contre coup de n'être que de tas d'os. Depuis ils se passent l'armure de leur ancien souverain pour continuer leur confrontation sans fin.",
    stats: {att: 2, def: 2, hp: 4, move: 4, range: 4, taille: 3}
  },
  {
    id: 9,
    nom: "Glups",
    categorie: "Troupe",
    faction: "Slime",
    images: sli_glups,
    passif: "Super glue",
    histoire: "Les Slimes sont une seule et même entité qui se divise pour mieux régner. Chaque membre de cette même espèce partage une seule et même conscience n'ayant qu'un seul but, se nourrir. Un seul contact avec cette masse gélatineuse et c'est fini pour vous.",
    stats: {att: 3, def: 3, hp: 4, move: 3, range: 6, taille: 3}
  },
  {
    id: 10,
    nom: "Sloops",
    categorie: "Troupe",
    faction: "Slime",
    images: sli_sloops,
    passif: "Pousse Pousse",
    histoire: "Les Slimes sont une seule et même entité qui se divise pour mieux régner. Chaque membre de cette même espèce partage une seule et même conscience n'ayant qu'un seul but, se nourrir. Un seul contact avec cette masse gélatineuse et c'est fini pour vous.",
    stats: {att: 0, def: 2, hp: 2, move: 5, range: 0, taille: 2}
  },
  {
    id: 11,
    nom: "Swaps",
    categorie: "Troupe",
    faction: "Slime",
    images: sli_swaps,
    passif: "Just swap",
    histoire: "Les Slimes sont une seule et même entité qui se divise pour mieux régner. Chaque membre de cette même espèce partage une seule et même conscience n'ayant qu'un seul but, se nourrir. Un seul contact avec cette masse gélatineuse et c'est fini pour vous.",
    stats: {att: 0, def: 2, hp: 2, move: 3, range: 2, taille: 3}
  },
]