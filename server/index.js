const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const baseUrl = "/api/rodeo"
const axios = require(`axios`)

app.use(BodyParser.json())
app.get(baseUrl, (req, res) => {
    axios
      .get(
        `http://eventful.com/json/events/?q=rodeo&app_key=nMJzcGm845V9hpCg`
      )
      .then(response => {
        // response = response.data;
        res.status(200).send(response.data);
      });
 })
const port = 3000
app.listen(port,() => console.log(`listeningOnPort ${port}`))