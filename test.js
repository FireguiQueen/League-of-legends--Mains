// All my mains will be here.
const ChampList = [];

// Creating a new champion.
function creatChamp(champion, mastery) {
  ChampList.push({
    champion,
    mastery
  });
}



// My mains. Arguments: Champion-name & champion-mastery
const neeko = creatChamp('neeko', 1000);
const kassadin = creatChamp('kassadin', 1000);
const veigar = creatChamp('veigar', 1000);
const ekko = creatChamp('ekko', 1000);



