/**
 * Write your challenge solution here
 */

const cartItemContain = document.getElementById(`cart-items`);
console.log(`lenght of cartitem = `,cartItemContain.children.length);

const emptyCart = document.querySelector(`.empty-cart`)
console.log(emptyCart);
const cartTotal = document.querySelector(`#cart-total`);
displayTotal = cartTotal.querySelector(`h3`);
console.log(displayTotal.textContent);


let tshirtPrize = 0, jeansPrice = 0, sneakersPrize = 0, hatPrize = 0;
let tshirtCount = 0, jeansCount = 0, sneakersCount = 0, hatCount = 0;
let total = 0;
let cartItem = null;
function addToCart(item, prize){
      
    if(emptyCart.classList.contains(`empty-cart`)){         //remove empty cart when any one item is added
        emptyCart.remove();
    }
    if(item === `T-Shirt`){                                  //check item is T-Shirt
            
            if(tshirtCount===0){
                tshirtCount++;
                tshirtPrize = tshirtPrize + prize;
                total = total + tshirtPrize;
                createQuantityControl(item,tshirtCount,tshirtPrize);
            }else{
                updateQuantity(item,1);
            }
    }else if(item === `Jeans`){                                 //check item is Jeans
            if(jeansCount===0){
                jeansCount++;
                jeansPrice = jeansPrice +prize;
                createQuantityControl(item,jeansCount,jeansPrice);
            }
            else{
              updateQuantity(item,1);
            }
    }else if(item === `Sneakers`){                               //check item is Sneakers
            if(sneakersCount===0){
                sneakersCount++;
                sneakersPrize = sneakersPrize +prize;
                createQuantityControl(item,sneakersCount,sneakersPrize);
            }else{
                updateQuantity(item,1);
            }
    }else if(item === `Hat`){                                      //check item is hat
            if(hatCount===0){
                hatCount++;
                hatPrize = hatPrize + prize;
                createQuantityControl(item,hatCount,hatPrize);
            }else{
                  updateQuantity(item,1);
            }
    }
    total = (tshirtCount * 19.99) + (jeansCount * 49.99) + (sneakersCount * 79.99) + (hatCount * 24.99)
    displayTotal.textContent = `Total: ${total}$`
}   
function createQuantityControl(item,count,prize){  
    cartItem = document.createElement(`div`);
                cartItem.className = `cart-item`
                cartItem.setAttribute(`id`,item+`id`)
                cartItemContain.appendChild(cartItem);
                const tshirtlable= document.createElement(`p`);
                tshirtlable.textContent = item;
                cartItem.appendChild(tshirtlable);
                const quantityControl = document.createElement(`div`);
                quantityControl.className = `quantity-controls`;
               /* quantityControl.innerHTML = `<button onClick = "updateQuantity(${item},-1)">-</button>
                                             <p id = "${item}CountId">${count}</p>
                                             <button onClick = "updateQuantity(${item},1)">+</button>
                                             <p id = "${item}PrizeId">${prize}&#36;</p>
                                             <button onClick = "removeFromCart(${item})">Remove</button>`
                */
             quantityControl.innerHTML = `   <button onClick="updateQuantity('${item}', -1)">-</button>
                                             <p id="${item}CountId">${count}</p>
                                             <button onClick="updateQuantity('${item}', 1)">+</button>
                                             <p id="${item}PrizeId">${prize}&#36;</p>
                                             <button onClick="removeFromCart('${item}')">Remove</button>`;
                                         
                cartItem.appendChild(quantityControl);
}

function updateQuantity(item,quantity){
        console.log("hello");
        
        if(item === `T-Shirt`){
           if(quantity===1){
             tshirtCount++;
             tshirtPrize = tshirtPrize + 19.99;
           }
           else{
             tshirtCount--;
             tshirtPrize = tshirtPrize - 19.99;
           }
           document.getElementById(`${item}CountId`).textContent = tshirtCount;
           document.getElementById(`${item}PrizeId`).textContent = tshirtPrize +`$`;

        }else if(item === `Jeans`){
              if(quantity===1){
                jeansCount++;
                jeansPrice = jeansPrice + 49.99;
              }
              else{
                jeansCount--;
                jeansPrice = jeansPrice - 49.99;
              }
              document.getElementById(`${item}CountId`).textContent = jeansCount;
              document.getElementById(`${item}PrizeId`).textContent = jeansPrice + `$`;
   
        }else if(item === `Sneakers`){
              if(quantity===1){
                sneakersCount++;
                sneakersPrize = sneakersPrize + 79.99;
              }
              else{
                sneakersCount--;
                sneakersPrize = sneakersPrize - 79.99;
              }
              document.getElementById(`${item}CountId`).textContent = sneakersCount;
              document.getElementById(`${item}PrizeId`).textContent = sneakersPrize + `$`;
   
        }else if(item === `Hat`){
              if(quantity===1){
                     hatCount++;
                     hatPrize = hatPrize + 24.99;
              }
              else{
                hatCount--;
                hatPrize = hatPrize - 24.99;
              }
              document.getElementById(`${item}CountId`).textContent = hatCount;
              document.getElementById(`${item}PrizeId`).textContent = hatPrize + `$`;   
        }
        total = (tshirtCount * 19.99) + (jeansCount * 49.99) + (sneakersCount * 79.99) + (hatCount * 24.99)
        displayTotal.textContent = `Total: ${total}$`   
        console.log("tshrtcount = "+tshirtCount+" tshrtprize = "+tshirtPrize);
        console.log("jeasncount = "+tshirtCount+" jeansprice = "+jeansPrice);
        console.log("sneakercount = "+tshirtCount+" sneakerprice = "+sneakersPrize);
        console.log("hatcount = "+tshirtCount+" hatprice = "+hatPrize);         
}

function removeFromCart(item){                       //this function used to delete item from cart
    console.log(`item inside removed button`,item);
    
    if(item === `T-Shirt`){
       document.getElementById(item+`id`).remove();
       tshirtCount = 0;
       tshirtPrize = 0;
    }
    if(item === `Jeans`){
        document.getElementById(item+`id`).remove();
        jeansCount = 0;
        jeansPrice = 0;
    }
    if(item === `Sneakers`){
        document.getElementById(item+`id`).remove();
        sneakersCount = 0;
        sneakersPrize = 0
    }
    if(item === `Hat`){
        document.getElementById(item+`id`).remove();
        hatCount = 0;
        hatPrize = 0;
    }
    if(cartItemContain.children.length === 0){
        emptyCart.classList.add(`empty-cart`);
        cartItemContain.appendChild(emptyCart);
    }
    total = (tshirtCount * 19.99) + (jeansCount * 49.99) + (sneakersCount * 79.99) + (hatCount * 24.99); 
    displayTotal.textContent = `Total: ${total}$`          
}