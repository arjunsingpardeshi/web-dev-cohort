function invertedMountain(n) {

    let pattern = "";
 
    for(i = n; i>0;i--){      //outer loop for rows
    
       for(j = 0; j<i;j++){    //inner loop for column
         pattern = pattern+"*";
       }
       pattern = pattern+"\n";
    }  
    let lastIndex = pattern.lastIndexOf("\n");
    return pattern.substring(0,lastIndex);      //remove last "\n" from pattern and return substring
 }

 console.log(invertedMountain(6));