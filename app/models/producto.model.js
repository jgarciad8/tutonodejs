module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define("producto", {
    nombre: { 
      type: Sequelize.STRING, 
      allowNull: false 
    },
    descripcion: { 
      type: Sequelize.STRING 
    },
    precio: { 
      type: Sequelize.DECIMAL(10, 2), 
      allowNull: false 
    },
    stock: { 
      type: Sequelize.INTEGER, 
      defaultValue: 0 
    },
    activo: { 
      type: Sequelize.BOOLEAN, 
      defaultValue: true 
    }
    
  });

  return Producto;
};