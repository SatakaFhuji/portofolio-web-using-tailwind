const scriptURL = 'https://script.google.com/macros/s/AKfycbz3Znc8GV24G2WTcfHb0g6yxCNwVxzLFPw_cRS1iwIDZSTtNmLt5lqtCNufw4JCigdlWw/exec'
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,  {method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error', error.message))
})