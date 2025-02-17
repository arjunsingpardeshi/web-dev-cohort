if(!Array.prototype.myFilter){

    Array.prototype.myFilter = function(myFunction){
        let result = [];
        for(let i=0;i<this.length;i++){
            if(myFunction(this[i])){
                
                result.push(this[i]);
            }
        }
        return result;
    }
}

arr = [1,2,3,4,5,6]
console.log(arr.myFilter(e => e%2===0));
