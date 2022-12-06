const BaseModel = require("./base.model");

class CategoryModel extends BaseModel {
   async getAllCategories() {
        const sql = "SELECT categories.id, categories.name FROM categories";
        return await this.querySQL(sql)
    }
}

module.exports = CategoryModel;
