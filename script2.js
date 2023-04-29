let div1=document.getElementById("div1")
function drow(allPro=[]){
    let pro=JSON.parse(localStorage.getItem("Carts"))||allPro
    let y=pro.map((item)=>{
        return`
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card container-fluid p-3 my-3 border">
          <img class="card-img-top" src="${item.src1}" alt="Card image">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <p >${item.price}</p>
            <button class="btn bg-dark text-light ${item.id}" onclick="remove(${item.id})">remove</button>
            </div>
        </div>
      </div>
        `
    })
    div1.innerHTML=y
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