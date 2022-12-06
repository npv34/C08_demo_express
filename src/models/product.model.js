const BaseModel = require("./base.model");


class ProductModel extends BaseModel {
    async getAllProduct() {
        const sql = `SELECT products.*, categories.name as 'category_name' FROM products
                     JOIN categories ON products.category_id = categories.id`;
        console.log(sql)
        return await this.querySQL(sql)
    }

    async delete(id) {
        const sql = `DELETE FROM products WHERE id = ${id}`;
        return await this.querySQL(sql)
    }

    async getProductById(id) {
        const sql = `SELECT *  FROM products WHERE id = ${id}`;
        return await this.querySQL(sql)
    }

}

module.exports = ProductModel
