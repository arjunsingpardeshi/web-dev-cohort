
class MyPromise{
        constructor(executorFn){
            this._state = `pending`;
            this._succesCallback = [];
            this._errorCallback = [];
            this._finallyCallback = [];
            this.value = undefined;
            executorFn(this.resolverFunction.bind(this),this.rejectorFunction.bind(this));
        }

        then(cb){
            if(this._state = `fullfilled`){
                cb(this.value);
                return this;
            }
            this._succesCallback.push(cb);
            return this;
        }
        catch(cb){

            if(this._state = `rejected`){
                cb();
                return this;
            }
            
            this._errorCallback.push(cb);
            return this;
        }
        finally(cb){
            if(this._state !==`pending`){
                cb();
                return this;
            }
            this._finallyCallback.push(cb);
            return this;
        }
        resolverFunction(value){
            this.value = value;
            this._state = `fullfilled`;
            this._succesCallback.forEach((cb) => cb(value));
            this._finallyCallback.forEach((cb) => cb());
 
        }
        rejectorFunction(err){
            this._state=`rejected`;
            this._errorCallback.forEach((cb) => cb(err));
            this._finallyCallback.forEach((cb) => cb());

        }
}

function wait(seconds){
    const p = new MyPromise((resolve,reject) =>{
             setTimeout(()=>resolve(`hello`),seconds*1000)
    });
    return p
}

const p = wait(5);

p.then((data)=> console.log("v1 promise resolve after 10 seconds",data))
 .catch(()=> console.log("v1 rejected after 10 seconds"))
 .finally(()=> console.log("v1always"));

 p.then((data)=> console.log("v2promise resolve after 10 seconds",data))
 .catch(()=> console.log("v2 rejected after 10 seconds"))
 .finally(()=> console.log("v2 always"));