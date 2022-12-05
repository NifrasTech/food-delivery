const express = require("express")
const router = express.Router()

const menuController = require('../controller/MenuController')
const categoryController = require('../controller/MenuController')

//Menu 
router.post("/menu/create",menuController.create)
router.post('/menu/:edit_id',menuController.update)
router.get("/menu",menuController.all)

//Category
router.post("/category/create",categoryController.create)
router.get("/categories",categoryController.all)

module.exports=router