const express=require('express');

const router=express.Router();
//importing all controllers
const CreateProduct = require('../controller/CreateProduct');
const getProductByTitle = require('../controller/SearchProduct');
const getProductById = require('../controller/GetById');
const getAllProducts = require('../controller/GetAllProducts');
const deleteProductById = require('../controller/DeleteProduct');

router.route('/product/create').post(CreateProduct)
router.route('/product/:title').get(getProductByTitle)
router.route('/product/:id').get(getProductById)
router.route('/products').get(getAllProducts)
router.route('/product/delete/:id').delete(deleteProductById)
module.exports=router;