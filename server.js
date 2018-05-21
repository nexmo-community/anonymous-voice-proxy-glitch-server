const express = require('express')
const app = express()

app.get("/", (request, response) => {
  response.json([
    {
      "action": "connect",
      "eventUrl": ["https://example.com/events"],
      "from": `${process.env.FROM_NUMBER}`,
      "endpoint": [
        {
          "type": "phone",
          "number": `${process.env.TO_NUMBER}`
        }
      ]
    }
  ])
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
