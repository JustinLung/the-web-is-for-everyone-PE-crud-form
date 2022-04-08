> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# 🎉 PE Scrollbook CRUD
Progressive Enhancement voor Scrollbook CRUD form. Een applicatie die werkt op elke browser.
![Mockup](https://github.com/JustinLung/the-web-is-for-everyone-PE-crud-form/blob/main/docs/mockup.png?raw=true)

## 📚 Wireflow
<!-- Toon hier de Wirefllow -->
![Wireflow](https://github.com/JustinLung/the-web-is-for-everyone-PE-crud-form/blob/main/docs/wireflow-breakdown-html.jpg?raw=true)

## 🥑 Breakdown
<!-- Toon hier de Breakdown met de pseudo code en de verschillende lagen van Progressive enhancement -->
![Breakdown Schets](https://github.com/JustinLung/the-web-is-for-everyone-PE-crud-form/blob/main/docs/breakdown-layers.jpg?raw=true)

## 🚀 Code
<!-- Toon hier de verschillende technieken die je gebruikt en hoe je dit met de CSS cascade en/of JS feature detect hebt gecodeerd -->

``` js
// Feature Detection
function postData(e) {
  // Send Data to the API
  if (!validate.checkValidity()) return
  // Detecs fetch feature on browser
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

```

<!-- documenteer het onderzoek met de browser ondersteuning in de WIKI van de leertaak -->
[😜 Onderzoek](https://github.com/JustinLung/the-web-is-for-everyone-PE-crud-form/wiki)
## 🍉 Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
