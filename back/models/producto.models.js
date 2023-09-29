import pgServices from "../services/pg.services.js";

export const getProductoModel = async () => {
    let con = new pgServices();
    return await con.connection.query("SELECT * FROM producto");
}

export const getProductoUnicoModel = async (id_producto) => {
    let con = new pgServices();
    return await con.connection.query(`SELECT * FROM producto
    WHERE id_producto = $1`, [id_producto]);
}

export const postProductoModel = async (nombre, valor) => {
    try {
        let con = new pgServices();
        con.connection.none(`INSERT INTO producto 
        (NOMBRE, VALOR)  
        VALUES 
        ($1, $2)`, [nombre, valor]);
        return 'Transacción realizada';
    } catch (error) {
        return 'En este momento no se puede realizar su transacción';
    }
}

export const updateProductoModel = async (id_producto, nombre, valor) => {
    try {
        let con = new pgServices();
        await con.connection.none(`UPDATE producto 
        SET NOMBRE = $1, VALOR = $2
        WHERE id_producto = $3`, [nombre, valor, id_producto]);
        return 'Registro actualizado exitosamente';
    } catch (error) {
        return 'No se pudo actualizar el registro';
    }
}

export const deleteProductoModel = async (id_producto) => {
    try {
        let con = new pgServices();
        await con.connection.none(`DELETE FROM producto 
        WHERE id_producto = $1`, [id_producto]);
        return 'Registro eliminado exitosamente';
    } catch (error) {
        return 'No se pudo eliminar el registro';
    }
}
