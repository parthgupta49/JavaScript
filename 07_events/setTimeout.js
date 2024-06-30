// const sayMyName = () => {
//     console.log("Parth Gupta")
// }

// const changeText = () => {
//     document.querySelector('h1').innerHTML = 'Coffee With Steve'
// }


// const changeMe = setTimeout(changeText,5000);
// document.querySelector('#btn').addEventListener(('click'),()=>{
//     clearTimeout(changeMe)
// })
let intervalId;
document.querySelector('#start').addEventListener('click',(event)=>{
    intervalId = setInterval((message) => {
        console.log(`${message}`)
    },2000,"Steve is up and running")
})

document.querySelector('#stop').addEventListener('click',(event)=>{
    clearInterval(intervalId)
})