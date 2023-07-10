// All my mains will be here.
const champList = [];

// Creating a new champion.
function creatChamp(champion, mastery) {
  champList.push({
    champion,
    mastery
  });
}

// My mains. Arguments: Champion-name & champion-mastery
const neeko = creatChamp('neeko', 1000);
const kassadin = creatChamp('kassadin', 1000);
const veigar = creatChamp('veigar', 1000);
const ekko = creatChamp('ekko', 1000);


function creatCard(champion){
    const {champion: name, mastery } = champion
    return `
        <div id="card">
            <section id="back" class="face">
                <h1> ${mastery} </h1>
            </section>
            <section id="front" class="face">
                <h1> ${name} </h1>
            </section>
        </div>
    `
}


const bodyPage = document.querySelector('body');
for(let i = 0; i < champList.length; i++){
    bodyPage.innerHTML += creatCard(champList[i]); 
}


