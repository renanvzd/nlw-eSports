import express from 'express'

const app = express()

// www.minhaapi.com/ads
app.get('/ads', (request, response) => {
  return response.send('Acessou Ads!')
})

app.listen(3333)