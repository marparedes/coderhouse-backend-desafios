const express = require("express")

const { Router } = express
const router = new Router()
const Contenedor = require("../Contenedor")

let productos = new Contenedor("productos.txt")

router.get("/", async (req, res) => {
    try {
        let products = await productos.getAll()
        res.send(products)
    } catch (error) {
        res.status(404).send({ error: 'Ocurrió un error' })
        console.log(error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        let producto = await productos.getById(id)
        res.send(producto)
    } catch (error) {
        res.status(404).send({ error: 'Producto no encontrado' })
        console.log(error)
    }

})

router.post("/", async (req, res) => {
    try {
        let newProduct = req.body
        res.send(await productos.save(newProduct))
    } catch (error) {
        res.status(404).send({ error: 'Ocurrió un error' })
        console.log(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        let product = req.body
        let result = productos.updateById(id, product)
        res.send(result)
    } catch (error) {
        res.status(404).send({ error: 'Ocurrió un error' })
        console.log(error)
    }

})

router.delete("/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        productos.deleteById(id)
    } catch (err) {
        res.status(404).send({ error: "Producto no encontrado" })
    }
})

module.exports = router