if(!Array.prototype.myMap){

    Array.prototype.myMap = function(myFunction){
        let result = [];
        for(let i = 0;i<this.length;i++){
            result.push(myFunction(this[i],i));
        }
        return result;
    };
}

arr = [1,2,3,4,5,6];
newArr = arr.myMap(e => e*4);
console.log(newArr);