if(!Array.prototype.myForeach){
    
       Array.prototype.myForeach = function(myFunction){

                for(i = 0;i<this.length;i++){
                    myFunction(this[i],i);
                }
       }

}
let arr = [10,20,30,40,50,60];
   arr.myForeach(function(value,index){
       console.log(`value at ${index} = ${value}`)
   });