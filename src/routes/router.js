import express from "express";

import * as services from "../services/render.js";
import * as controller from "../controller/controller.js";

const router = express.Router()

router.get('/', services.homeRoutes);
router.get('/add-user', services.add_user)
router.get('/update-user', services.update_user)


router.post('/api/users', controller.create);
router.get('/api/users', controller.find);
router.put('/api/users/:id', controller.update);
router.delete('/api/users/:id', controller.deleteUser);

export default router;