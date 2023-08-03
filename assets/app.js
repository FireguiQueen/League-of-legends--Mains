// All my champions main are here. 
const championList = [];



// Gives the array a new champion. Parameters: champion-name & champion-mastery.  
function newChampion(champion, mastery){
    championList.push({
        champion,
        mastery
    })
}


// Creat a "champion card". --> Return name and mastery. For example: Lulu - 150,000
function creatCard(champion){
    const {champion: name, mastery} = champion;
    console.log(champion)
    return `
    <div id="card">
        <section id="back" class="cards">
            <h1> ${mastery} </h1>
        </section>

        <section id="front" class="cards">
            <h1> ${name} </h1>
        </section>
    `
}



// Creat a new champion to "championList". Arguments: champion-name & champion-mastery.
const kled = newChampion('Kled', 220000);



const bodyPage = document.querySelector('body')
for(let i = 0; i < championList.length; i++){
    bodyPage.innerHTML +=  creatCard(championList[i])
}


const myCard = document.querySelector('div')
myCard.addEventListener('click', function(){
    myCard.classList.toggle('flip')
})