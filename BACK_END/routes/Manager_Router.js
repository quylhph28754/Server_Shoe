var express = require('express');
var router = express.Router();
var ManagerController = require('../Contronller/Manager_Controller');

router.get('/productlist',ManagerController.ProductList);
router.get('/edit-product',ManagerController.EditProduct);
router.get('/addproduct',ManagerController.AddProduct);

router.get('/vorcherlist',ManagerController.VorcherList);


router.get('/bannerlist',ManagerController.BannerList);
router.get('/add-banner',ManagerController.AddBanner);

module.exports = router;