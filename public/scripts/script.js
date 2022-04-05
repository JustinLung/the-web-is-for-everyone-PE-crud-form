var submitBtn = document.getElementById('submitButton')

submitBtn.onclick = postData

function onSubmit(e) {
  if (!window.XMLHttpRequest) {
    console.log('XHr is not supported')
    return false
  }
  xhr.open('POST', 'https://scrollbook.api.fdnd.nl/v1/category')
  xhr.send()

  e.preventDefault()
}
