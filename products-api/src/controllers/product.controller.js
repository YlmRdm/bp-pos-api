const db = require("../config/database");

exports.createProduct = async (req, res) => {
    const { name, description, quantity, price, catId, catName, urlImage, recipe, existed } = req.body;
    const { rows } = await db.query("INSERT INTO products (name, description, quantity, price, catId, catName, urlImage, recipe, existed) VALUES ($2, $3, $4, $5, $6, $7, $8, $9, $10)", [name, description, quantity, price, catId, catName, urlImage, recipe, existed]);

    res.status(201).send({
    message: "Product added successfully!",
    body: {
        product: { name, description, quantity, price, catId, catName, urlImage, recipe, existed }
    },
    });
};


exports.listAllProducts = async (req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY name ASC');
    res.status(200).send(response.rows);
};


exports.findProductById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    res.status(200).send(response.rows);
}


exports.updateProductById = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description, quantity, price, catId, catName, urlImage, recipe, existed } = req.body;
    const response = await db.query("UPDATE products SET name = $2, description = $3, quantity = $4, price = $5, catId = $6, catName = $7, urlImage = $8, recipe = $9, existed = $10 WHERE id = $1", [name, description, quantity, price, catId, catName, urlImage, recipe, existed]);
    res.status(200).send({ message: "Product Updated Successfully!" });
};


exports.deleteProductById = async (req, res) => {
    const id = parseInt(req.params.id);
    await db.query('DELETE FROM products WHERE id = $1', [id]);
    res.status(200).send({ message: 'Product deleted successfully!', id });
};