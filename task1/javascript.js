const number1=document.querySelector(".number1")
const emel=document.querySelector(".text")
const number2=document.querySelector(".number2")
const cavab=document.querySelector(".cavab")
const btn=document.querySelector(".btn")


btn.addEventListener("click", function(){
    if(emel.value=="+"){
        cavab.innerText=Number(number1.value)+Number(number2.value)
    }else if(emel.value=="-"){
        cavab.innerText=Number(number1.value)-Number(number2.value)
    }else if(emel.value=="*"){
        cavab.innerText=Number(number1.value)*Number(number2.value)
    }else if(emel.value=="/"){
        cavab.innerText=Number(number1.value)/Number(number2.value)
    }else{
        alert("Siz hesab emelini duzgun daxil etmemisiz! hesabemeli yerine (+,-,* ve ya /) emelini daxil edin")
    }
})