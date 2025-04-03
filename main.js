let bill = 0 
 let tipPercentage = 0
 let numberOfPeople = 0
 let buttonSelected = null
 
 let billInput = document.querySelector("#bill")
 billInput.addEventListener("input", reciveBillValue)
 
 let numberOfPeopleInput = document.querySelector("#people")
 numberOfPeopleInput.addEventListener("input", reciveNumberOfPeopleValue)
 
 function reciveNumberOfPeopleValue(){
     numberOfPeople = numberOfPeopleInput.valueAsNumber
 
     calculate()
 }
 
 
 function reciveTipPercentageValue(value){
     tipPercentage = value / 100
 
     buttonSelected = document.querySelector("")
 
 }
 
 function reciveBillValue(){
     console.log(billInput.valueAsNumber)
     bill = billInput.valueAsNumber
 
     calculate()
 
 }
 
 function reciveTipPercentageValue(value){
     buttonSelected = document.querySelector("")
     
 
 }
 
 function calculate(){
     if (bill !==0 && tipPercentage !==0 && numberOfPeople !==0){
      console.log("é possível calcular")   
     } else {
         console.log("Ainda não dá! Preencha tudo!")
     }
 }