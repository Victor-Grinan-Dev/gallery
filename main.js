

const picBank = [
    "imgs/andy-holmes-sym5TTE2ks0-unsplash.jpg",
    "imgs/autumn-studio-gsyUo-_cU94-unsplash.jpg",
    "imgs/bekky-bekks-N6yqlPqURR4-unsplash.jpg",
    "imgs/carl-raw-_NEzKE6Zdp4-unsplash.jpg",
    "imgs/finn-hackshaw-FQgI8AD-BSg-unsplash.jpg",
    "imgs/francois-olwage--KLKu_pruJ4-unsplash.jpg",
    "imgs/gattotere-SKlwtMS_7hI-unsplash.jpg",
    "imgs/gradienta-QWutu2BRpOs-unsplash (1).jpg",
    "imgs/hector-achautla-Szyj_xzcZlg-unsplash.jpg",
    "imgs/hello-i-m-nik-K_qGVldtzk0-unsplash.jpg",
    "imgs/karalina-s-8V7ymFP8-0M-unsplash (1).jpg",
    "imgs/marra-m7fT6OreZfI-unsplash.jpg",
    "imgs/martin-woortman-Wtr39iVfzpw-unsplash.jpg",
    "imgs/maxime-lebrun-1o2071GOVp0-unsplash.jpg",
    "imgs/mike-von-v9-ZW3VONcw-unsplash.jpg",
    "imgs/muhammad-saushan-lheYsXRi2Fc-unsplash.jpg",
    "imgs/nathan-dumlao-WDjNsJWIxVE-unsplash.jpg",
    "imgs/nio-milano-caH-ZLrisZA-unsplash.jpg",
    "imgs/oleg-laptev-QRKJwE6yfJo-unsplash.jpg",
    "imgs/photo-1444090542259-0af8fa96557e.avif",
    "photo-1540331547168-8b63109225b7.avif"
];

const totalPics = document.querySelector("#gallery").childElementCount;

const selected = [];

const randomIndex = (array) => Math.floor((Math.random() * array.length) + 1);
const selectOneRandomPic = (array) => array[randomIndex(array)];

for (let i = 0; i < totalPics; i++){  

    do {
        currentPic = selectOneRandomPic(picBank);
    }while(selected.includes(currentPic))

    selected.push(currentPic); 
}





/**
let id = 0
selected.forEach((url) => {
    const currentelement = document.querySelector(`#pic_${++id}`);
    currentelement.style.backgroundImage = `url(${url})`;
})
 */


