let box = document.getElementById("container")
let imgBox = document.createElement('img')
imgBox.classList.add("images")
let next = document.getElementById("nextArrow")
let back = document.getElementById("backArrow")
let play = document.getElementById("play")
let paragrafo = document.getElementById("paragrafo")
let titolo = document.getElementById("titolo")


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];          
    images.forEach((element)=>{
       
        
        
        
        imgBox.src= element.image
        box.appendChild(imgBox)
        titolo.innerHTML= element.title
        paragrafo.innerHTML= element.text

        
    })    
        //let immagine = element.image
        //let titolo = element.title
        //let testo = element.text
        
        //image++
    