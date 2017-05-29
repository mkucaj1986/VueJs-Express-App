/*jshint esversion: 6 */
import { Router } from 'express';

import products from './products';

var router = Router();

// Add USERS Routes
router.use(products);

export default router;
