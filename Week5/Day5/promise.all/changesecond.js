let form = document.forms.exchangeform

form.addEventListener("submit", getRate)

async function getCodes(){
  try{
    const response = await fetch("https://v6.exchangerate-api.com/v6/ce284318aa428eed3dce93d0/codes")
    const data = await response.json()
    let currenciesArray = data.supported_codes
    const optionsCurrency = selectCurrency(currenciesArray)
    return optionsCurrency
  }
  catch(err){
    console.log("Error getting data to Select options")
  }
}

getCodes()


function selectCurrency(data){
  let selectData = ""
  for(let i = 0; i < data.length; i++){
    selectData += `<option value="${data[i][0]}"> ${data[i][0]} - ${data[i][1]}</option>`
  }
  let fromCurrencyOption = document.querySelector("#fromCurrency")
  fromCurrencyOption.innerHTML = selectData
  let toCurrencyOption = document.querySelector("#toCoin")
  toCurrencyOption.innerHTML = selectData
}

async function getRate(e){
  e.preventDefault()
  let fromCurrency = form.elements.fromCurrency.value
  let toCurrency = form.elements.toCoin.value
  let amount = form.elements.amount.value
  try{
    const response = await fetch(`https://v6.exchangerate-api.com/v6/ce284318aa428eed3dce93d0/pair/${fromCurrency}/${toCurrency}/${amount}`)
    const data = await response.json()
    let exchangeRate = data.conversion_rate
    let conversionResult = data.conversion_result
    let displayRes = displayResult(exchangeRate, conversionResult)
    return displayRes
  }
  catch(err){
    console.log("Error")
  }
}

function displayResult(rate, conversionResult){
  let section = document.querySelector("#container")
  let divResults = document.createElement("div")
  divResults.setAttribute("class", "results-div")
  let conversion = document.createElement("p")
  let conversionText = document.createTextNode(`Converted value: ${conversionResult}`);
  conversion.appendChild(conversionText)

  let rateP = document.createElement("p")
  // rateP.setAttribute("disable")
  let rateText = document.createTextNode(`Exchange rate: ${rate}`);
  rateP.appendChild(rateText)
  console.log(rateP)
  divResults.append(conversion, rateP)
  section.appendChild(divResults)
}







