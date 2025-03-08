// arr = [1,2,3,4,5,6,7,8,9,10]

// //we have to use arr[-1] it will display last element of array

// //--------------------------------code to stop to access password----------------------------------
// const user = {
//                 name: "xyz",
//                 age: 50,
//                 password: "123"
//             };
//   const proxyUser = new Proxy(user,{
//     get(target,prop){
//         if(prop==="password"){
//             throw new Error("Access denied");
//         }
     
//         return target[prop]
//     }
//   })

//   console.log(proxyUser.password); //it throw error and not give access to password
  
function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            index = Number(prop)
            if(index<0){
                console.log("inside if of get fun");
                return target[target.length + index];

            }
            console.log("outside if of get fun");

            return target[index];
        },
        set(target,prop, value){
           index = Number(prop);
           if(index<0){
            target[target.length + index] = value
            console.log("inside if of set fun");
           }
           else{
            console.log("outside if of set fun");

            target[index] = value
 
           }
        }
    });
}

arr = [1,2,3,4,5,6,7,8,9,10]

newArray = negativeIndex(arr);   //both array modify if you dont want that then give parameter [...arr]

console.log(newArray[-4]);

newArray[-1] = 100

console.log(newArray[-1]);
console.log(newArray);
console.log(arr);
