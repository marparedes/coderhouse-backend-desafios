const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

const productsRoutes = require("./routes/productos")
const randomRoute = require("./routes/productoRandom")

app.use("/static", express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/productos", productsRoutes)
app.use("/productoRandom", randomRoute)



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})