const db = require("../models");
const Producto = db.productos;

exports.create = (req, res) => {
  if (!req.body.nombre || !req.body.precio) {
    return res.status(400).send({ message: "Nombre y precio son obligatorios." });
  }

  Producto.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error al crear el Producto." }));
};

exports.findAll = (req, res) => {
  // Trae los productos incluyendo la información del proveedor dueño (relación N:1)
  Producto.findAll({ include: ["proveedor"] }) 
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error al obtener productos." }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Producto.findByPk(id, { include: ["proveedor"] })
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({ message: `No se encontró el Producto con id=${id}.` });
    })
    .catch(err => res.status(500).send({ message: "Error recuperando Producto con id=" + id }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Producto.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Producto actualizado con éxito." });
      else res.send({ message: `No se pudo actualizar el Producto con id=${id}.` });
    })
    .catch(err => res.status(500).send({ message: "Error actualizando Producto con id=" + id }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Producto.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Producto eliminado con éxito." });
      else res.send({ message: `No se pudo eliminar el Producto con id=${id}.` });
    })
    .catch(err => res.status(500).send({ message: "Error eliminando Producto con id=" + id }));
};