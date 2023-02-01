const textForm = document.querySelector('#text')
textForm.addEventListener('keydown', onlyLetters)

function onlyLetters(evt) {
    evt.target.value =  evt.target.value.replace(/[^a-zA-Z]/g,'');
}

onlyLetters()
