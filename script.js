const percent = document.querySelectorAll(".buttons button")
const percentCustom = document.querySelector(".buttons input")

const tip = document.querySelector(".tip")
const total = document.querySelector(".total")
const errorNumber = document.querySelector(".error-number")

percent.forEach(element => {
    element.addEventListener("click", () => {
        let readyPercent = (element.innerText.replace("%", "")) * 0.01
        const bill = document.querySelector(".bill")
        const number = document.querySelector(".number")

        let wholeTip = parseFloat(bill.value) * parseFloat(readyPercent)
        tip.innerText = `$${wholeTip.toFixed(2)}`

        if(number.value.length == 0){
            errorNumber.style.display = "flex"
        }else if(number.value === "0"){
            errorNumber.style.display = "flex"
        }else if(number.value != "0"){
            errorNumber.style.display = "none"
            let totalPerPerson = wholeTip.toFixed(2) / number.value
            total.innerText = `$${totalPerPerson.toFixed(2)}`
        }
    })
});

percentCustom.addEventListener("keyup", () => {
    let readyPercent = (percentCustom.value.replace("%", "")) * 0.01
    const bill = document.querySelector(".bill")
    const number = document.querySelector(".number")

    let wholeTip = parseFloat(bill.value) * parseFloat(readyPercent)
    tip.innerText = `$${wholeTip.toFixed(2)}`

    if(number.value.length == 0){
        errorNumber.style.display = "flex"
    }else if(number.value != "0"){
        errorNumber.style.display = "none"
        let totalPerPerson = wholeTip.toFixed(2) / number.value
        total.innerText = `$${totalPerPerson.toFixed(2)}`
    }
})