const fs = require(`fs`);
const fsv2 = require(`fs/promises`)

console.log("start");
//--------------------------------------with promise---------------------------------------------------------------

fsv2.readFile(`./hello.txt`,`utf-8`)
.then((content)=>{console.log("content is ",content);  fsv2.writeFile(`./backup.txt`,content)})
.then(()=>fsv2.unlink(`./hello.txt`))
.catch((err)=>{console.log("error is ",err)})
.finally(()=>console.log("run always"))
//-----------------------------------------old code without promise------------------------------------------------
//this is demonstration of nested callback
fs.readFile(`./hello.txt`,`utf-8`,function(err,content){
    if(err){
        console.log("error in reading file",err);   
    }
    else{
        console.log("data is ",content);
        fs.writeFile(`./backup.txt`,content,function(err){
            if(err){
                console.log("error in writting file",err);
            }
            else{
                console.log("backup file created");
                fs.unlink(`./hello.txt`,function(err){
                    if(err){
                        console.log("error in deleting hello file",err);
                    }
                    else{
                        console.log("file deleted successfull");      
                    }         
                });               
            }               
        });     
    }
});
console.log("end");