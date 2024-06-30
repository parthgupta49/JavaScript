// document.getElementById('owl').onclick = function(){
//     alert('this is owl')
// }
// attachEvent()
// jquery() - onEventListener

// document.getElementById('owl').addEventListener('click',function(event){
//     console.log('event object',event);

// })

document.querySelector("#images").addEventListener(
  "click",
  (event) => {
    console.log(event.target);
    let removeMaadi = event.target.parentNode
    // console.log(removeMaadi);
    // removeMaadi.parentNode.removeChild(removeMaadi) // another way to remove the child
    if(event.target.tagName === 'IMG'){
      console.log(event.target.id);
      removeMaadi.remove()
    }
  },
  false
);

// document.querySelector("#owl").addEventListener(
//   "click",
//   (event) => {
//     console.log("owl clicked");
//     event.stopPropagation(); // this will prevent this owl to bubble to its parent
//   },
//   false
// );

// document.querySelector("#google").addEventListener("click", (event) => {
//   event.preventDefault()
//   event.stopPropagation()
// },false);
