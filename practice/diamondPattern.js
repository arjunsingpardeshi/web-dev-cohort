function diamondPattern(n){
     pattern = "";
    for(i = 0; i<n; i++){
         pattern = pattern+"\n"
        for(j=i;j<i*3+1;j++){
            pattern = pattern+"*"
        }

    }
    console.log(n)
    for(i = n-1; i>0; i--){
        pattern = pattern+"\n"
        for(j=0;j<i*2-1;j++)
            pattern = pattern+"*";
    }
    return pattern;
}
console.log(diamondPattern(3));