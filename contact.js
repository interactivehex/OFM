const scriptURL = 'https://script.google.com/macros/s/AKfycbxT5ZciMDIC5VeO2SVJNO2A4WDycIrWIKPk4GrIDCLD1L9g9-7h9e9IDVzLGqiLB1PZ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 2000)
        form.reset()
      })
      .catch(error => {
        msg.innerHTML = "Error"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 10000)
      })
})
