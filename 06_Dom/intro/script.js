// const a = document.getElementById("title")
// a.innerHTML = "This is i am trying"
// a.style.color = "purple"

// const body = document.body
// body.append("Hello bye")
// const div = document.createElement("div")
// div.innerText = "Helllo World using innertext"
// div.textContent = "I am adding this now using TextContent"
// div.innerHTML = "<strong>This is nice but not nice</strong>"

// const strong = document.createElement("strong")
// strong.textContent = "Hey this is pretty Isn't it?"
// div.append(strong)
// body.append(div)
// textContent prints it as it is how we are writing it in the html
// however innerText prints it as it shown in the browser
// For e.g, if we set something as display:none then, innerText will not show that but textContent will do

// const div = document.querySelector("div")


const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#Hello")
const spanBye = document.querySelector("#Bye")

// spanHi.remove() // this will remove to its existence
//  another way to remove the element is to remove the child element from its parent element
// div.removeChild(spanBye)


// spanHi.setAttribute("id","thisIsId")
// spanHi.id = "thisIsId" // we can directly change the value like this
// spanHi.removeAttribute("title") // this is to remove an attribute of an element


// console.log(spanHi.dataset.test)
// console.log(spanHi.dataset.longername)
// spanHi.dataset.longername = " He gets to 91* "
// console.log(spanHi.dataset.longername)

// spanHi.dataset.helloMate = "this is nice"
// console.log(spanHi.dataset.helloMate);


// spanBye.classList.add("new-class")
// spanBye.classList.remove("by2")
// spanBye.classList.toggle("by3") // if this already exist it will remove it or if its not then, it will add it

spanBye.style.backgroundColor = "pink"