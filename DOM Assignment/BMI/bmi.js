const calcbtn = document.getElementById(`btn`);
const height = document.getElementById(`height`);
const weight = document.getElementById(`weight`);
const resultText = document.getElementById(`result-text`);
const resultBMI = document.getElementById(`result-bmi`);
const scale = document.getElementById(`result-scale`);

calcbtn.addEventListener(`click`, () =>{
    let hvalu,wvalue,bmi;
    hvalu = height.value;
    wvalue = weight.value;
    
    if(hvalu===""||wvalue===""){
        alert("Please enter Height and Weight")
    }else{
        
        let h = parseInt(hvalu);
            h = h/100;
            h = h*h;

        let w = parseInt(wvalue);
        bmi =w/h;
        n=bmi;
        bmi = bmi.toFixed(2);
        resultText.innerText = "Your BMI";
        resultBMI.innerText = bmi;
        if(n<18.5)
            scale.innerText = "Underweight";
        else if(n>18.5 && n<24.9)
             scale.innerText = "Normal";
        else if(n>25 && n<29.9)
             scale.innerText = "Overweight";
        else if(n>30 && n<34.9)
            scale.innerText = "Obese";
        else
        scale.innerText = "Extremely Obese";

        
    }

    
});