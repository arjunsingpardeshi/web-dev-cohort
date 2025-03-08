
    function diamond(n){
        pattern = "";
        //upper part of diamond
           for(i = 1; i<=n; i++){
               for(j=1;j<=n-i;j++){
                   pattern = pattern+" ";   //space before the stars
               }
               for(k = 1; k<=(2*i-1);k++){
                 pattern = pattern + "*";   //stars on each line
               }
               pattern = pattern+"\n"   //move to next line after each row
       
           } 
           
           //lower part of the diamond (after the middle line)
       
         for(i = n-1;i>=1;i--){
           for(j=1;j<=n-i;j++){
             pattern = pattern+" "; //space before stars
           }
           for(k=1; k<=(2*i-1);k++){
             pattern = pattern + "*";  //stars for each line
           }
           pattern = pattern + "\n";  //move to the next line after each row
       
         }
            console.log(pattern.lastIndexOf("\n"));
            let lastIndex = pattern.lastIndexOf("\n");
           return pattern.substr(0,lastIndex);            
    }
              console.log(diamond(4));