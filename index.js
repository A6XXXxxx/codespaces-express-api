const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept, Authorization",)
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PORT,PUT,DELETE")
  next()
})

app.use(express.json())

const products = [
  { id: 0, name: "Notebook Acer Swift", price: 45900, img: "https://img.advice.co.th/images_nas/pic_product4/A0147295/A0147295_s.jpg" },
  { id: 1, name: "Notebook Asus Vivo", price: 19900, img: "https://img.advice.co.th/images_nas/pic_product4/A0146010/A0146010_s.jpg" },
  { id: 2, name: "Notebook Lenovo Ideapad", price: 32900, img: "https://img.advice.co.th/images_nas/pic_product4/A0149009/A0149009_s.jpg" },
  { id: 3, name: "Notebook MSI Prestige", price: 54900, img: "https://img.advice.co.th/images_nas/pic_product4/A0149954/A0149954_s.jpg" },
  { id: 4, name: "Notebook DELL XPS", price: 99900, img: "https://img.advice.co.th/images_nas/pic_product4/A0146335/A0146335_s.jpg" },
  { id: 5, name: "Notebook HP Envy", price: 46900, img: "https://img.advice.co.th/images_nas/pic_product4/A0145712/A0145712_s.jpg" }];

app.get('/', (req, res) => {
  res.send('hahaha')
})

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
