const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Création des points pour le slider

let div_dots = document.querySelector(".dots")

for(let i = 0; i < slides.length; i++) {
	let new_dot = document.createElement("span")
	new_dot.classList.add("dot")
	div_dots.appendChild(new_dot)
}
let all_dots = document.querySelectorAll(".dot")
all_dots[0].classList.add("dot_selected")

// Définition des variables

let i = 0
let banner_img = document.querySelector(".banner-img")
let banner_tagline = document.querySelector("#banner p")

let arrow_right = document.querySelector(".arrow_right")
let arrow_left = document.querySelector(".arrow_left")

// Evènement - clic sur la flèche de droite

arrow_right.addEventListener("click", () => {
	console.log("J'ai cliqué sur la flèche de droite")
	all_dots[i].classList.remove("dot_selected")
	if(i < slides.length - 1) {
		i++
	} else {
		i = 0
	}
	all_dots[i].classList.add("dot_selected")
	let num_img = slides[i].image
	banner_img.src = "./assets/images/slideshow/" + num_img
	banner_tagline.innerHTML = slides[i].tagLine
})

// Evènement - clic sur la flèche de gauche

arrow_left.addEventListener("click", () =>{
	console.log("J'ai cliqué sur la flèche de gauche")
	all_dots[i].classList.remove("dot_selected")
	if(i > 0) {
		i--
	} else {
		i = (slides.length - 1)
	}
	all_dots[i].classList.add("dot_selected")
	let num_img = slides[i].image
	banner_img.src = "./assets/images/slideshow/" + num_img
	banner_tagline.innerHTML = slides[i].tagLine
})