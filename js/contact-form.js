const form = document.getElementsByTagName('form');
const errorMsg = document.getElementById('error');

const inputsIds = ['fname', 'lname', 'subject', 'message']

form[0].addEventListener('submit', (event) => {

    let isError = false;
    event.preventDefault();
    for (const inputId of inputsIds) {

        const input = document.getElementById(inputId);

        if (!input.value) {
            isError = true;
            console.log(input.value);
            input.classList.add('incorrect-input');

            if (errorMsg.style.getPropertyValue('display') === '') {
                errorMsg.style.setProperty('display', 'block');
            }
        } else {
            input.classList.remove('incorrect-input');
        }
    }

    if (!isError) {
        location.reload();
    }
})
