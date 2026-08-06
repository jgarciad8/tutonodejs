const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Opciones de conexión
const sequelizeOptions = {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
};

// Solo agregar SSL cuando el .env lo indique
if (dbConfig.ssl) {
  sequelizeOptions.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
}

// Crear la conexión
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  sequelizeOptions
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modelos
db.clientes = require("./cliente.model.js")(sequelize, Sequelize);
db.proveedores = require("./proveedor.model.js")(sequelize, Sequelize);
db.productos = require("./producto.model.js")(sequelize, Sequelize);

// Relaciones
db.proveedores.hasMany(db.productos, {
  as: "productos",
  foreignKey: "proveedorId"
});

db.productos.belongsTo(db.proveedores, {
  as: "proveedor",
  foreignKey: "proveedorId"
});

module.exports = db;