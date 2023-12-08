import pgServices from "../services/pg.services.js";
import { baseProductQuery } from "../config/formatting.js";


export const getProductoModel = async () => {
    let con = new pgServices();
    return await con.connection.query(baseProductQuery);
}

export const getProductoUnicoModel = async (id_producto) => {
    let con = new pgServices();
    return await con.connection.query(`${baseProductQuery}
    WHERE p.title = $1`, [id_producto]);
}

export const postProductoModel = async (title, price,description,category_id,images) => {
    try {
        let con = new pgServices();
        con.connection.none(`INSERT INTO products 
        (title, price, description, category_id, images)  
        VALUES 
        ($1, $2,$3,$4,$5)`, [title, price,description,category_id,images]);
        return 'Transacción realizada';
    } catch (error) {
        return 'En este momento no se puede realizar su transacción';
    }
}

export const updateProductoModel = async (id_producto, title, price,description,category_id,images) => {
    try {
        let con = new pgServices();
        await con.connection.none(`UPDATE products 
        SET title = $1, price = $2, description = $3, category_id = $4, images = $5
        WHERE id= $6`, [title, price,description,category_id,images, id_producto]);
        return 'Registro actualizado exitosamente';
    } catch (error) {
        return 'No se pudo actualizar el registro';
    }
}

export const deleteProductoModel = async (id_producto) => {
    try {
        let con = new pgServices();
        await con.connection.none(`DELETE FROM products
        WHERE id = $1`, [id_producto]);
        return 'Registro eliminado exitosamente';
    } catch (error) {
        return 'No se pudo eliminar el registro';
    }
}
