
if(!Array.prototype.myCopyWithin){
        Array.prototype.myCopyWithin = function(target,start,end=this.length){
               if(target===undefined)
                    target=0
               if(start===undefined)
                  start=0
              
               if(target>this.length){         
                return this
               }else if(target){

               }
            

            

               
                
        }
        

}


arr = [1,2,3,4,5,6]
console.log(arr.myCopyWithin(1));