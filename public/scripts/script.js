var submitBtn = document.getElementById('submitButton')
var input = document.getElementById('category')
var validate = document.getElementsByTagName('form')[0]
var successMsg = document.getElementById('succesMsg')

submitBtn.onclick = postData

function postData(e) {
  // Send Data to the API
  if (!validate.checkValidity()) return
  if (window.fetch) {
    var category = JSON.stringify({ type: input.value })
    var options = {
      method: 'POST',
      body: category,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    fetch('https://scrollbook.api.fdnd.nl/v1/category', options)
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        console.log(data)
        successMsg.style.display = 'block'
        setTimeout(() => {
          successMsg.style.display = 'none'
        }, 2000)
        clearInput()
      })
    e.preventDefault()
  }
}

function clearInput() {
  input.value = ''
}
