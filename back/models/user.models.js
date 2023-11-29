import pgServices from "../services/pg.services.js";

export const getAuthUser = async (email,password) => {
    let con = new pgServices();
    return await con.connection.query(`SELECT * FROM users
    WHERE email = $1 AND password = $2`, [email,password]);
}