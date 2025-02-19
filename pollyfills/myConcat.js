

if(!Array.prototype.myConcat){

    Array.prototype.myConcat = function(...args){

       let newarr = [...this];
       
       for(let i=0;i<args.length;i++){
            if(Array.isArray(args[i])){
                 let subarr = args[i]
                 for(let j=0;j<subarr.length;j++){
                        newarr.push(subarr[j])
                 }
            }
            else{
                 newarr.push(args[i])
            }
       }   
       return newarr
    }
}

arr = [1,2,3]
arr1 = [`js`,`java`,]
n = 10

console.log(arr.concat(arr1,n,[50,100]));

console.log("=============");

console.log(arr.myConcat(arr1,n,[50,100]));
