import pgServices from "../services/pg.services.js";

export const getProductoModel = async () => {
    let con = new pgServices();
    return await con.connection.query('SELECT p.id, p.title, p.price, p.description, c.id AS category_id, c.name AS category_name, c.image AS category_image, p.images FROM products p JOIN categories c ON p.category_id = c.id');
}

export const getProductoUnicoModel = async (id_producto) => {
    let con = new pgServices();
    return await con.connection.query(`SELECT * FROM products
    WHERE id = $1`, [id_producto]);
}

export const postProductoModel = async (title, price,description,category_id,images) => {
    try {
        let con = new pgServices();
        con.connection.none(`INSERT INTO products 
        (title, price, description, category_id, images)  
        VALUES 
        ($1, $2)`, [title, price,description,category_id,images]);
        return 'Transacción realizada';
    } catch (error) {
        return 'En este momento no se puede realizar su transacción';
    }
}

export const updateProductoModel = async (id_producto, title, price,description,category_id,images) => {
    try {
        let con = new pgServices();
        await con.connection.none(`UPDATE producto 
        SET NOMBRE = $1, VALOR = $2
        WHERE id= $3`, [title, price,description,category_id,images, id_producto]);
        return 'Registro actualizado exitosamente';
    } catch (error) {
        return 'No se pudo actualizar el registro';
    }
}

export const deleteProductoModel = async (id_producto) => {
    try {
        let con = new pgServices();
        await con.connection.none(`DELETE FROM producto 
        WHERE id = $1`, [id_producto]);
        return 'Registro eliminado exitosamente';
    } catch (error) {
        return 'No se pudo eliminar el registro';
    }
}
