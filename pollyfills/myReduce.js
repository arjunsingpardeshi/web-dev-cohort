if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(myFunction,initvalue){
                                let result,accu=initvalue;
                                for(i = 0;i<this.length;i++){

                                  accu = myFunction(accu,this[i]);

                                }
                                return result=accu;
    }
}
// arr = [1,2,3,4,5,6]
// console.log(arr.myReduce((accu,currvalue) => accu+currvalue,0));

 //arr.reduce((accu,currvalue) => accu+currvalue,0);

 arr1 = [{name:`abc`,price:100},
         {name:`xyz`,price:200},
         {name:`xyz`,price:300},
         {name:`xyz`,price:400},
         {name:`xyz`,price:500},
         {name:`xyz`,price:600}
        ]

       console.log( arr1.myReduce((accu,currvalue) =>accu+currvalue.price,0));
       