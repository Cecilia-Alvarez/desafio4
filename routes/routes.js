const router = require('express').Router();
const Controllers = require('../controllers/controllers');

module.exports = () => {
    router,get('/', (req, res) => {
        res.render('index')
    })
    router.get("/api/products", async (req, res) => {
        const response = await Controllers.getAll();
        res.json(response);
    })

    router.get("/api/products/:id", async (req, res) => {
        const response = await Controllers.getById();
        res.json(response);
    })

    router.post("/api/productos", async (req, res) => {
        const response = await Controllers.save(obj);
        res.json(response)
    })

    router.put("/api/productos/:id", async (req, res) => {
        const response = await Controllers.update();
        res.json(response)
    })

    router.delete("/api/productos/:id", async (req, res) => {
        const response = await Controllers.deleteById();
        res.json(response)
    })
}
 