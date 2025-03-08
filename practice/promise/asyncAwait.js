//-----------------async and await demo----------------------------------------
//we need async await when we want to execute async code in sync way due to one line code input depend on output of its privous line

const fs = require(`fs`);
console.log("start");

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

function wait(seconds)
{
      return new Promise((resolve,reject)=>{
          setTimeout(()=> resolve(),seconds*1000);
      })
}
async function doTask(){
    try{
        const fileContent =  await readFileWithPromises(`./hello.txt`,`utf-8`);
                          await writeFileWithPromises(`./backup.txt`,fileContent);
                          await wait(10);
                          await deleteFileWithPromises(`./hello.txt`);
       }catch(e){
        console.log(`error is `,e);
       }finally{
        console.log("Always execute");            
       }
}
doTask().then(() => console.log("All done"));

console.log("end");
