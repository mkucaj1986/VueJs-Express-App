/*jshint esversion: 6 */
import { Router } from 'express';

var router = Router();

// Mock Users
import products from '../../api/products';

/* GET Products */
router.get('/products', function(req, res, next) {
    res.json(products);
});

/* GET user by ID. */
router.get('/products/:id', function(req, res, next) {
    var id = parseInt(req.params.id);
    if (id >= 0 && id < products.length) {
        res.json(products[id]);
    } else {
        res.sendStatus(404);
    }
});

export default router;
