const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

const routes = require("./routes/productos")
app.use("/static", express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/productos", routes)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})