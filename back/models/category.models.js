import pgServices from "../services/pg.services.js";

export const getCategory = async (category_id) => {
    let con = new pgServices();
    return await con.connection.query(`SELECT * FROM categories`);
}