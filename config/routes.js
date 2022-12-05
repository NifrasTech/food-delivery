const express = require("express")
const router = express.Router()

const menuController = require('../controller/MenuController')

router.post("/menu/create",menuController.create)
router.post('/menu/:edit_id',menuController.update)
router.get("/menu",menuController.all)

module.exports=router