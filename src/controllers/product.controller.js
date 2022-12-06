const ProductModel = require("../models/product.model");
const CategoryModel = require("../models/category.model")

class ProductController {

    constructor() {
        this.productModel = new ProductModel();
        this.categoryModel = new CategoryModel();
    }

    showFormCreate(req, res) {

    }

    async index(req, res) {
        let products = await this.productModel.getAllProduct();
        res.render('admin/products/list', { products: products})
    }

    async destroy(req, res) {
        let id = req.params.id;
        await this.productModel.delete(id);
        res.redirect('/products')
    }

    async showFormEdit(req, res) {
        let id = req.params.id;
        let product = await this.productModel.getProductById(id);
        let categories =  await this.categoryModel.getAllCategories();
        res.render('admin/products/edit', { categories: categories, product: product[0]})
    }
 }

module.exports = ProductController;
