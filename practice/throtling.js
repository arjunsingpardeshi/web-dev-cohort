const outer = (fn,delay) =>{
    let myId = null;

    return  (...args) => {
        if(myId === null){
            fn(args);
            myId = setTimeout(()=>{
                myId = null
            },delay);
        }
    }
}
function greet(name){
    console.log("hello + ",name);
    
}

const inner = outer((calling)=>greet("jenny "+calling),3000);

inner('first');
inner('second');
inner('third');