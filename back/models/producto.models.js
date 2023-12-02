import pgServices from "../services/pg.services.js";
import { baseProductQuery } from "../config/formatting.js";


export const getProductoModel = async () => {
    let con = new pgServices();
    return await con.connection.query(baseProductQuery);
}

export const getProductoUnicoModel = async (id_producto) => {
    let con = new pgServices();
    return await con.connection.query(`${baseProductQuery}
    WHERE p.id = $1`, [id_producto]);
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
