const express = require("express")

const { Router } = express
const router = new Router()
const app = express()
const Contenedor = require("../Contenedor")

let productos = new Contenedor("productos.txt")

router.get("/", async (req, res) => {
    try {
        let product = await productos.getRandom()
        res.status(200).send(product)
    } catch (error) {
        res.status(404).send("Ocurrió un error")
        console.log(error)
    }
})

module.exports = router