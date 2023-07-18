
// =====1=====

const coffee = document.querySelector("#coffee").value
const tea = document.querySelector("#tea").value
const juice = document.querySelector("#juice").value
const change = document.querySelector("#change")
const spanT1 = document.querySelector("#spanT1")

change.addEventListener("blur", ()=> {
    switch (change.value) {
        case coffee :
            spanT1.textContent = `Ваш напій ${coffee}`
            break
        case tea :
            spanT1.textContent = `Ваш напій ${tea}`
            break
        case juice :
            spanT1.textContent = `Ваш напій ${juice}`
            break    
    }

})

// =====2=====

const inputT2 = document.querySelector("#inputT2")
const btnT2 = document.querySelector("#btnT2")
const spanT2 = document.querySelector("#spanT2")

btnT2.addEventListener("click", ()=> {
    switch (inputT2.value) {
        case "Понеділок":
            spanT2.textContent = "Сьгодні робочий день("
        break
        case "Вівторк":
            spanT2.textContent = "Сьгодні робочий день("
        break
        case "Середа":
            spanT2.textContent = "Сьгодні робочий день("
        break
        case "Четвер":
            spanT2.textContent = "Сьгодні робочий день("
        break
        case "П'ятниця":
            spanT2.textContent = "Сьгодні робочий день("
        break
        case "Субота":
            spanT2.textContent = "Сьгодні вихідний)"
        break
        case "Неділя":
            spanT2.textContent = "Сьгодні вихідний)"
        break

        default:
            spanT2.textContent = "Це не день тижня"
    }

    
})

// =====3=====

const inputT3 = document.querySelector("#inputT3")
const btnT3 = document.querySelector("#btnT3")
const spanT3 = document.querySelector("#spanT3")

btnT3.addEventListener("click", ()=> {

    switch (inputT3.value) {
        case "1" :
        case "2" :
        case "12":
            spanT3.textContent = "Це зима"
        break

        case "3" :
        case "4" :
        case "5" :
            spanT3.textContent = "Це весна"
        break

        case "6" :
        case "7" :
        case "8" :
            spanT3.textContent = "Це літо"
        break

        case "9" :
        case "10":
        case "11":
            spanT3.textContent = "Це осінь"
        break

        default:
            spanT3.textContent = "Неправильний номер місяця"
    }

})

// =====4=====

const inputT4 = document.querySelector("#inputT4")
const btnT4 = document.querySelector("#btnT4")
const spanT4 = document.querySelector("#spanT4")

btnT4.addEventListener("click", ()=> {
    switch (inputT4.value) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            spanT4.textContent = "В цьому місяці 31 день"
        break

        case "4":
        case "6":
        case "9":
        case "11":
            spanT4.textContent = "В цьому місяці 30 днів"
        break

        case "2":
            spanT4.textContent = "В цьому місяці 28 днів"
        break
    }
})

// =====5=====

const inputT5 = document.querySelector("#inputT5")
const btnT5 = document.querySelector("#btnT5")


btnT5.addEventListener("click", ()=> {
    switch (inputT5.value) {

        case "Червоний":
            alert("Стоп")
        break

        case "Жовтий":
            alert("Чекати")
        break

        case "Зелений":
            alert("Йти")
        break

        default:
            alert("Введіть червоний, жовтий або зелений")
        break
    }
})

// =====6=====

const inputT6Numb1 = document.querySelector("#inputT6-1")
const inputT6Numb2 = document.querySelector("#inputT6-2")
const operator = document.querySelector("#operator")
const plus = document.querySelector("#plus").value
const minus = document.querySelector("#minus").value
const mnog = document.querySelector("#mnog").value
const dil = document.querySelector("#dil").value
const spanT6 = document.querySelector("#spanT6")
const btnT6 = document.querySelector("#btnT6")

btnT6.addEventListener("click", ()=> {

    switch (operator.value) {
        case "+":
            spanT6.textContent =  Number.parseInt(inputT6Numb1.value) + Number.parseInt(inputT6Numb2.value)
            break
        case "-":
            spanT6.textContent =  Number.parseInt(inputT6Numb1.value) - Number.parseInt(inputT6Numb2.value)
            break
        case "*":
            spanT6.textContent =  Number.parseInt(inputT6Numb1.value) * Number.parseInt(inputT6Numb2.value)
            break
        case "/":
            spanT6.textContent =  Number.parseInt(inputT6Numb1.value) / Number.parseInt(inputT6Numb2.value)
            break
    }

})



