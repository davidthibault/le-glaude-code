'use strict';

// Authentic quotes from "La Soupe aux Choux" (1981)
// Dialogues: Jean Halain, based on the novel by René Fallet
// Characters: Le Glaude (Louis de Funès), Le Bombé (Jean Carmet)

const QUOTES = [
  {
    text: "La soupe aux choux mon Blaise ça parfume jusqu'au trognon, ça fait du bien partout où qu'elle passe dans les boyaux. Ça tient au corps, ça vous fait même des gentillesses dans la tête. Tu veux qu't'y dise : ça rend meilleur.",
    speaker: 'Le Glaude',
  },
  {
    text: "Elle sent la terrrrre, la TerRRRrre, la TerRRRre après la Pleut ! C'est comme la pluie, mais c'est encore plus mouillé !",
    speaker: 'Le Glaude',
  },
  {
    text: "Eh ben si on peut plus péter sous les étoiles sans faire tomber un martien, il va nous en arriver des pleines brouettes !",
    speaker: 'Le Glaude',
  },
  {
    text: "On ne pète que dehors. On sait se tenir. On a déjà été au restaurant !",
    speaker: 'Le Glaude',
  },
  {
    text: "Et bah mes cadets, et bah mes petits frères, ça commence bien !",
    speaker: 'Le Glaude',
  },
  {
    text: "Un chtit canon... un canon, c'est un coup de vin rouge.",
    speaker: 'Le Glaude',
  },
  {
    text: "Le canon, c'est pas seulement du pinard, c'est aussi de l'amitié.",
    speaker: 'Le Glaude',
  },
  {
    text: "L'heure c'est l'heure. Et c'est l'heure du perniflard !",
    speaker: 'Le Bombé',
  },
  {
    text: "Mon eau, elle a une température de haute précision pour le perniflard. Ça t'descend dans les boyaux comme la rosée du matin sur les feuilles.",
    speaker: 'Le Bombé',
  },
  {
    text: "Vous savez, Le Glaude, qu'on ne parle plus que de votre soupe sur Oxo ?",
    speaker: 'Le Martien',
  },
  {
    text: "Mon eau, sans m'vanter... c'est la meilleure du coin, pour la soupe, et pour l'perniflard ! Y'a là-d'ssous, une nappe phréatique.",
    speaker: 'Le Bombé',
  },
  {
    text: "Bon, c'est pas tout ça l'père, mais tu me r'tarde ! L'heure c'est l'heure.",
    speaker: 'Le Bombé',
  },
];

function pick() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

module.exports = { QUOTES, pick };
