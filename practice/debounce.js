function outer(fn,delay){
    let myId;    
    
    return function(...args){
        clearTimeout(myId)
        myId = setTimeout(() => {
            fn.apply(this,args);
        },delay);
    };
}
function greet(name){
    console.log(`hello ${name}`); 
}
const inner = outer((lastname)=>greet("anil "+lastname),3000);
inner('First');
inner('second');
inner('third');

//remove past request => keep reference of it
//fire new request
//userRequest => debouncesUserRequest()