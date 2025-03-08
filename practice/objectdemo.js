// obj={
    
//     name:"Lemon tea",
//     type : "Green",
    

//     caffine : "low"
// }
/*console.log(obj.name);
console.log(obj["name"]);*/










const personPrototype = {
    name: "first",
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);
  carl.greet(); // hello!
  
  carl.greet = function () {
    console.log("hello carl");
    
  };

  carl.greet();
  personPrototype.greet()
  carl.name = "second"

  console.log(carl.name);
  console.log(personPrototype.name);
  
  console.log("personPrototype Object = ",personPrototype);
  console.log("carl Object = ",carl);
  
  