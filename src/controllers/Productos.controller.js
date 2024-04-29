const { getConnection } =  require("./../database/database");


const getProductos = async (req, res) => {
    try {
        const connection= await getConnection();
        const result = await connection.query("SELECT id, nombre, descripcion, stock FROM productos");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    getProductos
};