/*jshint esversion: 6 */
import { Router } from 'express';

var router = Router();

// Mock Users
const products = [
    { "title": "Ipad 5", "description": "lorem ipsum some test dimpsum" },
    { "title": "Iphone 6", "description": "lorem ipsum some test dimsum" },
    { "title": "Andorid 3", "description": "lorem ipsum some test dimsum" },
    { "title": "Andorid 4", "description": "lorem ipsum some test dimsum" }
];

/* GET users listing. */
router.get('/products', function(req, res, next) {
    res.json(products);
});

/* GET user by ID. */
router.get('/product/:id', function(req, res, next) {
    var id = parseInt(req.params.id);
    if (id >= 0 && id < products.length) {
        res.json(products[id]);
    } else {
        res.sendStatus(404);
    }
});

export default router;
