const display = document.getElementById(`display`);
const buttons = document.querySelectorAll(`.button`);
let expression = ""
    buttons.forEach(button =>{    
        button.addEventListener('click',() => {
            let btn = button.id;
            
            if(btn ==="btn1"){          
                expression = expression + "1";
                display.value = expression;
            }else 
            if(btn ==="btn2"){                   
                expression = expression + "2";
                display.value = expression;                          
            }else
            if(btn ==="btn3"){
                expression = expression + "3";
                display.value = expression;                
            }else
            if(btn ==="btn4"){
                        expression = expression + "4";
                        display.value = expression
            }else
            if(btn ==="btn5"){                    
                        expression = expression + "5";
                        display.value = expression;
            }else
            if(btn ==="btn6"){
                        expression = expression + "6";
                        display.value = expression;
            }else
            if(btn ==="btn7"){
                      expression = expression + "7";
                        display.value = expression;                
            }else
            if(btn ==="btn8"){
                        expression = expression + "8";
                        display.value = expression;
            }else
            if(btn ==="btn9"){
                        expression = expression + "9";
                        display.value = expression;
            }else
            if(btn ==="btn0"){
                    expression = expression + "0";
                    display.value = expression;     

            }else
            if(btn ==="btn-del"){
                  expression = expression.slice(0,expression.length-1);
                  display.value = expression;
            }else
            if(btn ==="btn-clear"){
                expression = "";
                display.value =expression;

            }else
            if(btn ==="btn-addition"){

                if(expression.charAt(expression.length-1).includes('/') || expression.charAt(expression.length-1).includes('*') || expression.charAt(expression.length-1).includes('+') || expression.charAt(expression.length-1).includes('-')){
                    alert("please provide proper number");
                }
                else{
                    expression = expression.concat("+");
                    display.value=expression;
                }
                
            }else
            if(btn ==="btn-substraction"){
                if(expression.charAt(expression.length-1).includes('/') || expression.charAt(expression.length-1).includes('*') || expression.charAt(expression.length-1).includes('+') || expression.charAt(expression.length-1).includes('-')){
                    alert("please provide proper number");
                }
                else{
                    expression = expression + "-";
                    display.value=expression;
                }

            }else
            if(btn ==="btn-division"){

                   if(expression.length===0){
                        alert("please provide number first")

                   }
                   else{            
                            if(expression.charAt(expression.length-1).includes('/') || expression.charAt(expression.length-1).includes('*') || expression.charAt(expression.length-1).includes('+') || expression.charAt(expression.length-1).includes('-')){
                                alert("please provide proper number");
                            }
                            else{
                                expression = expression + "/";
                                display.value=expression;
                            }
                        }
            }else
            if(btn ==="btn-multiply"){
      
                            
                
                if(expression.length===0){
                    alert("please provide number first")

                }  
                else{   
                            if(expression.charAt(expression.length-1).includes('/') || expression.charAt(expression.length-1).includes('*') || expression.charAt(expression.length-1).includes('+') || expression.charAt(expression.length-1).includes('-')){
                                alert("please provide proper number");
                            }
                            else{
                                expression = expression + "*";
                                display.value=expression;
                            }
                }   
            }else
            if(btn ==="btn-equal"){

                if(expression.charAt(expression.length-1).includes('/') || expression.charAt(expression.length-1).includes('*') || expression.charAt(expression.length-1).includes('+') || expression.charAt(expression.length-1).includes('-')){
                    alert("please provide proper number at the end");
                }
                else{
                    expression = eval(expression).toString();
                    console.log("type of exp after = is ",typeof expression);
                    display.value = expression;
                }
            }
        });
   });