let div3=document.getElementById("div3")
let div2=document.getElementById("div2")
let icon=document.getElementById("icon")
let view=document.getElementById("view")
let products=document.getElementById("products")

let value=0;
let circle=document.getElementById("circle")


icon.onclick=function(){
    div3.style.visibility="visible"

}
view.onclick=function(){
    setTimeout(()=>{
        window.location="index3.html"
       })
}
let pro=[
    {
        id:1,
        src:"img1.jpg",
        price:"$150"
    },
    {
        id:2,
        src:"img2.jpg",
        price:"$100"
    },
    {
        id:3,
        src:"img3.webp",
        price:"$120"
    },
    {
        id:4,
        src:"img2.jpg",
        price:"$130"
    },
    {
        id:5,
        src:"img3.webp",
        price:"$150"
    },
]
function drow(){
    let y=pro.map((item)=>{
        return`
        <div class="div1">
        <img src="${item.src}" style="margin-bottom:10px">
        <p>${item.price}</p>
        <button class="btn bg-light" style="margin-top:10px" onclick="addToCart(${item.id})">add to cart</button>
        </div>
        `
    })
    products.innerHTML=y
}
drow()
let addedItem=[];
function addToCart(id){
    let choosenItem=pro.find((item)=>item.id===id);
    div2.innerHTML+=`<p>${choosenItem.price}</p>`
    addedItem=[...addedItem,choosenItem];
    localStorage.setItem("Carts",JSON.stringify(addedItem))
    circle.style.visibility="visible"
    value+=parseInt(circle.getAttribute("price"))
    circle.innerHTML=value
}

