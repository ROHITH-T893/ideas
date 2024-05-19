const fombtn = document.querySelector("button");
const fomel = document.forms.form;
console.log(fomel);
const handle1 = (event) => {
  //const formdta = [...new FormData(fomel)];
  event.preventDefault();
 // console.log(formdta);

//const data1=[...formdta.entries()]





///const jso=JSON.stringify(data1);
  //// console.log("json way",jso);
//let rec=new XMLHttpRequest()
//rec.open("GET","https://reqres.in/api/users/2",true)
//rec.onload=function(){
 // const ob=JSON.parse(rec.responseText)
  //console.log(ob);

  //console.log(rec.responseText);
//}
  //rec.send();
//fetch("https://reqres.in/api/users?page=2",{
  //method:"GET",
//}).then((rec)=>rec.json())
//.then((data)=>{
  //console.log(data.data);
//const da=data.data
//console.log(da[0]);
//document.getElementById("rec").innerText=`this is from api name ${da[0].first_name}`
//})



const nam=fomel.elements.name


setTimeout(() => {
  alert(`Thanks for giving feedback ${nam.value}`)
}, 1000);

};

const nam=fomel.elements.name

nam.addEventListener('blur',()=>{
 const h1=document.getElementById("h1")
h1.innerHTML=`Hello ,${nam.value}`
})
const radio=[...fomel.elements.radio];
const radel=document.getElementById("rad")
radel.addEventListener('change',(event)=>{
  if(event.target.value==="radio2")
    {
      alert("good choice")
    }
})

  
fomel.addEventListener('submit',handle1)


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