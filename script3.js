let products=document.getElementById("products")
function drow(allPro=[]){
    let pro=JSON.parse(localStorage.getItem("Carts"))||allPro
    let y=pro.map((item)=>{
        return`
        <div class="div1">
        <img src="${item.src}">
        <button class="btn bg-light" style="margin-top:10px" onclick="remove(${item.id})">remove</button>
        </div>
        `
    })
    products.innerHTML=y
}
drow()
function remove(id){
    let productsInCart=localStorage.getItem("Carts")
    if(productsInCart){
        let items=JSON.parse(productsInCart)
        let filtered=items.filter((item)=>item.id !== id)
        localStorage.setItem("Carts" ,JSON.stringify(filtered))
        drow(filtered)
    } 
}