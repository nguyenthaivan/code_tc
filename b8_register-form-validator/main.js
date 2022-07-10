const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const submit = $('.submit')
const listInput = $$('.input')
const listWarning = $$('.warning-message')

console.log(validateEmail('asd@gmail.com'))

function validateEmail(email) {
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return re.test(email)
}

function showWarning(message,index) {
    listWarning[index].innerHTML = message
    listInput[index].classList.add('error')
}

function handleWarning() {
    for (let index = 0; index < listInput.length; index++) {
        const element = listInput[index]
        if (!element.value.trim()) {
            showWarning(`${element.placeholder} is required`,index)
        }
        else {
            switch (index) {
                case 0:
                    if (element.value.length < 3 || element.value.length > 12) {
                        showWarning(`${element.placeholder} cần lớn hơn 3 và nhỏ hơn 12 kí tự`,index)
                    }
                    else {
                        showWarning('',index)
                    }
                    break;
                case 1:
                    if (!validateEmail(element.value)) {
                        showWarning(`${element.placeholder} is illegal`,index)
                    }
                    else {
                        showWarning('',index)
                    }
                    break;
                case 2:
                    if (element.value.length <= 6 && element.value.length > 12) {
                        showWarning(`${element.placeholder} cần lớn hơn 6 và nhỏ hơn 12 kí tự`,index)
                    }
                    else {
                        showWarning('',index)
                    }
                    break;
                case 3:
                    if (element.value !== listInput[index - 1].value) {
                        showWarning(`${element.placeholder} is not correct`,index)
                    }
                    else {
                        showWarning('',index)
                    }
                    break;    
                default:
                    break;
            }
        }
        
        
    }
}

submit.addEventListener('click',function(event) {
    event.preventDefault()
    handleWarning()
    // in ra thong bao
})


