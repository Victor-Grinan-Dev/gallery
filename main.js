const orangeFruit = "https://www.istockphoto.com/photo/whole-cross-section-and-quarter-of-fresh-organic-navel-orange-with-leaves-in-perfect-gm1227301369-361910165"
const orangeAbstract ="https://unsplash.com/photos/caH-ZLrisZA"
const orangeWall = "https://unsplash.com/photos/m7fT6OreZfI"
const orangeMountains = "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
const orangeSuit = "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419&q=80"
const orangeFlawers = "https://unsplash.com/photos/nqSUnXINsp4"
const orangeMegaphone = "https://unsplash.com/photos/QRKJwE6yfJo"
const orangeStairs = "https://unsplash.com/photos/SKlwtMS_7hI" /** */
const orangeChair = "https://www.istockphoto.com/photo/modern-interior-with-orange-colored-leather-armchair-sconce-coffee-table-and-gray-gm1296444787-389859089"
const orangeWoodWall = "https://unsplash.com/photos/_NEzKE6Zdp4"
const orangeVan = "https://unsplash.com/photos/lFCtJ5YLsXk"
const orangeRock = "https://unsplash.com/photos/-KLKu_pruJ4"
const orangeWall2 = "https://unsplash.com/photos/N6yqlPqURR4"
const orangePalms = "https://unsplash.com/photos/lheYsXRi2Fc"
const orangeMedusa = "https://unsplash.com/photos/NAP14GEjvh8"
const orangeSkyBirds = "https://unsplash.com/photos/Wtr39iVfzpw"
const orangeRounStairs = "https://unsplash.com/photos/1o2071GOVp0"
const orangePaintingInWall = "https://unsplash.com/photos/WDjNsJWIxVE"
const orangePenCup = "https://unsplash.com/photos/K_qGVldtzk0"
const orangePunkin = "https://unsplash.com/photos/8V7ymFP8-0M"
const orangestripes = "https://unsplash.com/photos/QWutu2BRpOs"
const orangeWindow = "https://unsplash.com/photos/gsyUo-_cU94"

const orange = [
    orangeFruit,
    orangeAbstract,
    orangeWall,
    orangeMountains,
    orangeSuit,
    orangeFlawers,
    orangeMegaphone,
    orangeStairs,
    orangeChair,
    orangeWoodWall,
    orangeVan,
    orangeRock,
    orangeWall2,
    orangePalms,
    orangeMedusa,
    orangeSkyBirds,
    orangeRounStairs,
    orangePaintingInWall,
    orangePenCup,
    orangePunkin,
    orangestripes,
    orangeWindow,
];

const totalPics = document.querySelector("#gallery").childElementCount;

const selected = [];

const randomIndex = (array) => Math.floor((Math.random() * array.length) + 1);
const selectOneRandomPic = (array) => array[randomIndex(array)];

for (let i = 0; i < totalPics; i++){  

    do {
        currentPic = selectOneRandomPic(orange);
    }while(selected.includes(currentPic))

    selected.push(currentPic); 
}


let id = 0
const currentelement = document.querySelector(`#pic_${++id}`);
console.log(currentelement)
console.log(selected[id])
currentelement.style.backgroundImage = `url(https://unsplash.com/photos/TAqKadWDdrU)`;

/**
let id = 0
selected.forEach((url) => {
    const currentelement = document.querySelector(`#pic_${++id}`);
    currentelement.style.backgroundImage = `url(${url})`;
})
 */


