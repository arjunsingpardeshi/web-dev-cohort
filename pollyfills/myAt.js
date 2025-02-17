
if(!Array.prototype.myAt){
    Array.prototype.myAt = function(index){
         let element;
        if(index>=0){               //code for index 0 or greater than 0
           element = this[index];        
        }
        else{                                //code for index is negative
            let revindex = this.length+index;
            element = this[revindex];
        }
            return(element)
    }
}
arr = [10,20,30,40,50,60];

console.log(arr.myAt(1));

str1 = "hello"