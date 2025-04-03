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
 
     removeClassButtonSelected()
 
     document.querySelector("#custom-tip").value = ""
 
     buttonSelected = document.querySelector(`#button-${value}`)
     buttonSelected.classList.add("button-selected")
 
     calculate()
 }
 
     removeClassButtonSelected()
 
     calculate()
 
 
 function removeClassButtonSelected(){
 
         if (buttonSelected !== null) {
          buttonSelected.classList.remove("button-selected")
          buttonSelected = null
         }
 
 }
 
 function reciveBillValue(){
     console.log(billInput.valueAsNumber)
     bill = billInput.valueAsNumber
 
     calculate()
 
 }
 
 
 function calculate(){
         let tipAmountStrong = document.querySelector(".amount strong")
         let tipAmountPerson = bill * tipPercentage / numberOfPeople
 
         tipAmountStrong.innerText= `$${tipAmountPerson.toFixed(2)}`
 
         let totalStrong = document.querySelector(".total strong")
         let totalPerson = (bill / numberOfPeople) + tipAmountPerson
 
         totalStrong.innerText = `$${totalPerson.toFixed(2)}`
 
     }
 