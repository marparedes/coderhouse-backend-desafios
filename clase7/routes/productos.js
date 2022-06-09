const express = require("express")

const { Router } = express
const router = new Router()
const Contenedor = require("../Contenedor")

let productos = new Contenedor("productos.txt")

router.get("/", async (req, res) => {
    let products = await productos.getAll()
    res.send(products)
})

router.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id)
    let producto = await productos.getById(id)
    res.send(producto)
})

module.exports = router