module.exports = (sequelize, Sequelize) => {
  const Proveedor = sequelize.define("proveedor", {
    nombre: { 
      type: Sequelize.STRING, 
      allowNull: false 
    },
    contacto: { 
      type: Sequelize.STRING 
    },
    telefono: { 
      type: Sequelize.STRING 
    },
    activo: { 
      type: Sequelize.BOOLEAN, 
      defaultValue: true 
    }
  });

  return Proveedor;
};