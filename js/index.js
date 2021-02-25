// Selecting Elements
// We are only selecting one element


// 1. getElementById()
// Gets any valid ID
// There is no need for "#", you just need the ID name

// var logo = document.getElementById('logo-title');

// console.log(logo);

// 2. querySelector

// var firstTitle =document.querySelector(".card-title");

// console.log(firstTitle)

// Selecting more than one element


// HTMLCollection - Has length
// const links = document.getElementsByClassName("menu-item");

// console.log(links) // You will get HTMLCollections (Array-like)

// NodeList - Has length and .forEach

// const links = document.querySelectorAll('.menu-item')

// links.forEach(function(item) {
//     item.style.fontSize = '40px'

// })

// console.log(links)

// Converting HTMLCollection to an actual array

// let changedToArray = Array.from(links)

// console.log(changedToArray)

// DOM Manipulation

const titles = document.getElementsByClassName("card-title")

for (let i = 0; i < titles.length; i++) {
    titles[i].style.color = "red"
}


// Change images and texts

let changeToUranus = document.querySelector(".card-img-top")

changeToUranus.src = "https://images.ctfassets.net/cnu0m8re1exe/7hQBr1Got3iOOxCn4yJqSy/8ac59ceb4d08d0474a2688ac976b1693/neptune1-1024x727.jpg?w=650&h=433&fit=fill"

changeToUranus.alt = "Uranus"

let newTitle = document.querySelector(".card-title");

newTitle.textContent = "Its the tilt for me!"


let changeMainText = document.querySelector(".card-text")

changeMainText.textContent = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."


// ClassList Manipulation

// Remove "extra-stuff" class from html

let extraStuff = document.querySelector(".extra-stuff")

extraStuff.classList.remove("extra-stuff")

// Adding to DOM with Javascript ONLY

// Step 1: Create new Element
const newContent = document.createElement("footer")


// Step 2: Add some content to the newly created footer Tag

newContent.textContent = "Website made by Duraan";
newContent.classList.add("footer")
newContent.style.backgroundColor = "purple"

console.log(newContent)

// Step 3: Add the created Element to the existing DOM (HTML Document)

// To add, use "prepend" or "append"

const parentElement = document.querySelector("body")

parentElement.append(newContent);


// ONLY USE APPEND OR PREPEND WHEN ELEMENT DOESN'T EXIST