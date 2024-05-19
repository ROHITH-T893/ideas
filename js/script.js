const formel = document.forms.form
const inv = formel.input
const texa = formel.text
const section = document.getElementById("sec")
const btn = document.getElementById('btn')
const key = "ideas"

btn.addEventListener('click',()=>{
if (inv.value=="" ){
alert("enter title")
}
else if(texa.value=="") {
  alert("enter idea")
}
else{
  handle(event)
}
})



const handle=(event) => {
  event.preventDefault()
  //console.log(inv.value);
  //console.log(texa.value);
  const div1 = document.createElement("div")
  div1.setAttribute("id", "show")
  const div2 = document.createElement("div")
  div2.setAttribute("style", "display: flex;justify-content: center;")
  const la = document.createElement("h1")
  la.setAttribute("class", "lab")

  la.textContent = inv.value
  div2.append(la)
  const div3 = document.createElement("div")
  const ul = document.createElement("ul")
  ul.setAttribute("id", "list")
  const li = document.createElement("li")
  li.setAttribute("class", "item")
  li.textContent = texa.value
  const i = document.createElement("i")
  i.setAttribute("class", "fa-solid fa-x")
  i.setAttribute("onclick", "de(event)")
  div1.append(i)
  ul.append(li)
  div3.append(ul)
  div1.append(div2)
  div1.append(div3)
  section.append(div1)
  //            img remov------------//
  const img = document.querySelector(".img")
  img.style.display = "none"



  //--------------local storage-----------------------/
  localStorage.setItem(key, JSON.stringify([...JSON.parse(localStorage.getItem(key) || "[]"), { idea: texa.value, title: inv.value }]))

};
function de(event) {

  const img = document.querySelector(".img")
  const deelm = event.target.parentNode
  deelm.remove()
  const destore = event.target

  const dee2 = destore.nextSibling.firstElementChild.textContent
  console.log(dee2);






  const idea = [...JSON.parse(localStorage.getItem(key))]

  idea.forEach((item) => {
    if (item.title === dee2) {
      idea.splice(idea.indexOf(item), 1)

    }
    localStorage.setItem(key, JSON.stringify(idea));
  })



  if (section.children.length == 0) {
    img.style.display = "flex"
  }
  else {
    img.style.display = "none"
  }
}
///  <div id="show"><i class="fa-solid fa-x" onclick="de(event)">
//<div style="display: flex;justify-content: center;"><label for="tit" >TITLE</label></div>

//<div>
//  <ul id="list"> 
//<li class="item" >hello</li>
//</ul>
//</div>
document.addEventListener("DOMContentLoaded", () => {
  const idea = [...JSON.parse(localStorage.getItem(key))]
  idea.forEach((item) => {
    const div1 = document.createElement("div")
    div1.setAttribute("id", "show")
    const div2 = document.createElement("div")
    div2.setAttribute("style", "display: flex;justify-content: center;")
    const la = document.createElement("h1")
    la.setAttribute("class", "lab")
    la.textContent = item.title
    div2.append(la)
    const div3 = document.createElement("div")
    const ul = document.createElement("ul")
    ul.setAttribute("id", "list")
    const li = document.createElement("li")
    li.setAttribute("class", "item")
    li.textContent = item.idea
    const i = document.createElement("i")
    i.setAttribute("class", "fa-solid fa-x")
    i.setAttribute("onclick", "de(event)")
    div1.append(i)
    ul.append(li)
    div3.append(ul)
    div1.append(div2)
    div1.append(div3)
    section.append(div1)

  })
  const img = document.querySelector(".img")
  if (section.children.length == 0) {
    img.style.display = "flex"
  }
  else {
    img.style.display = "none"
  }



})
function like(event){
 
  const lelm=event.target
  if(lelm.style.color==="blueviolet"){
    lelm.style.color="red"
  }
 else if(lelm.style.color==="red"){
    lelm.style.color="blueviolet"
 }

  //"<i class="fa-solid fa-heart"></i>"
}