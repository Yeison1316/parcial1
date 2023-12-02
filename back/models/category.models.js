import pgServices from "../services/pg.services.js";

export const getCategory = async () => {
    try {
      let con = new pgServices();
      return await con.connection.query(`SELECT * FROM categories`);
    } catch (error) {
      throw new Error("Error en getCategory: " + error.message);
    }
  };