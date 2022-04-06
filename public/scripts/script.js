var submitBtn = document.getElementById('submitButton')
var input = document.getElementById('category')

submitBtn.onclick = postData

function postData(e) {
  // Send Data to the API
  if (window.XMLHttpRequest) {
    var category = JSON.stringify({ type: input.value })
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (e) {
      if (xhr.status === 200 && xhr.readyState === 4) {
        var res = JSON.parse(xhr.responseText)
        console.log(res)
      }
    }
    xhr.open('POST', 'https://scrollbook.api.fdnd.nl/v1/category')
    xhr.send(category)
    e.preventDefault()
  }
}
