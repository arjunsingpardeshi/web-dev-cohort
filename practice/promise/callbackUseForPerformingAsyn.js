const fs = require(`fs`);
console.log(`start`);
 fs.readFile(`./hello.txt`,`utf-8`,function(err,data){
    if(err){
        console.log(`error in file handling = `,err);
    }
    else{
        console.log(`file  reading data =`,data);

    }
 });


console.log(`end`)