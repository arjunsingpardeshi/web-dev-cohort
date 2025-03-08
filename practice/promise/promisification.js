
const fs = require(`fs`);
const { log } = require("util");

console.log('start');

function readFileWithPromises(filename,encoding){
    return new Promise((resolve,rejects) => {
        fs.readFile(filename,encoding,(err,content)=>{
               if (err) {
                   rejects(err);
               }
               else{
                   resolve(content)
               }
        });
    });
}
function writeFileWithPromises(filename,content){
    return new Promise((resolve,reject) => {
          fs.writeFile(filename,content,(err) =>{
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
          });
    });    
}
function deleteFileWithPromises(filename){
    return new Promise((resolve,reject)=>{
        fs.unlink(filename,e =>{
            if(e){
                reject(e);
            }else{
                resolve()
            }
        })
    });
}


readFileWithPromises(`./hello.txt`,`utf-8`)
.then(content => writeFileWithPromises(`./backup.txt`,content))
.then(() => deleteFileWithPromises(`./hello.txt`))
.catch((e)=> console.log(e))
.finally(()=> console.log("All done"))

console.log('end');
