const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

const Contenedor = require("./Contenedor")
app.use("/static", express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

let productos = new Contenedor("productos.txt")

app.get("/productos", async (req, res) => {
    try {
        let products = await productos.getAll()
        res.send(products)
    } catch (error) {
        res.status(404).send({msg: 'Ocurrió un error'})
        console.log(error)
    }
})

app.get("/productoRandom", async (req, res) => {
    try {
        let product = await productos.getRandom()
        res.status(200).send(product)
    } catch (error) {
        res.status(404).send("Ocurrió un error")
        console.log(error)
    }
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})