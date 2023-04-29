let value=0;
let div1=document.getElementById("div1")
let div2=document.getElementById("div2")
let div3=document.getElementById("div3")
let circle=document.getElementById("circle")
let icon=document.getElementById("icon")
icon.onclick=function(){
    div2.style.visibility="visible"
    view.style.visibility='visible'
}
let pro=[
    {
        id:1,
        price:"180$",
        title:"pro1",
        src1:"0x0.jpg",
    },
    {
        id:2,
        price:"160$",
        title:"pro2",
        src1:"img5.jpg",
    },
    {
        id:3,
        price:"190$",
        title:"pro3",
        src1:"img6.png",
    },
    {
        id:4,
        price:"190$",
        title:"pro3",
        src1:"img6.png",
    },
    {
        id:5,
        price:"180$",
        title:"pro1",
        src1:"0x0.jpg",
    },
    {
        id:6,
        price:"160$",
        title:"pro2",
        src1:"img5.jpg",
    },
]
function drow(){
    let y=pro.map((item)=>{
        return`
            <div class="col-lg-3 col-md-5 col-sm-12" style='margin:auto;'>
            <div class=" container-fluid p-3 my-3 border">
              <img class="card-img-top" src="${item.src1}" alt="Card image">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <p >${item.price}</p>
                <a href="#" class="btn btn-primary" onclick="addToCart(${item.id})">Go somewhere</a>
              </div>
            </div>
          </div>
        `
    })
    div1.innerHTML=y
}
drow()
let addedItem=[];
function addToCart(id){
    let choosenItem=pro.find((item)=>item.id===id);
    div3.innerHTML+=`<p>${choosenItem.price}</p>`
    addedItem=[...addedItem,choosenItem];
    localStorage.setItem("Carts",JSON.stringify(addedItem))
    circle.style.visibility="visible"
    value+=parseInt(circle.getAttribute("price"))
    circle.innerHTML=value
}
view.onclick=function(){
    setTimeout(()=>{
        window.location="index2.html"
       })
}
