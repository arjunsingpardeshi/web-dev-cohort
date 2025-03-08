console.log("start");

let data = fetch("https://apii.freeapi.app/api/v1/public/randomproducts?")
console.log("data = ",data );
data.then((res) =>{console.log("data after then function ",res);
});
console.log("end");






data.catch(function(res){console.log('error is = ',res);
})