const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors())

app.get("/name", (req, res) => {res.json({ name: 'Dilara'})})
app.get("/age", (req, res) => {res.json({ age: '20'})})
app.listen(3001, () => {})