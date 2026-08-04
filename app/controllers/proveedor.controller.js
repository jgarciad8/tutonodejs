const db = require("../models");
const Proveedor = db.proveedores;

exports.create = (req, res) => {
  if (!req.body.nombre) return res.status(400).send({ message: "El nombre es obligatorio." });

  Proveedor.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error al crear el Proveedor." }));
};

exports.findAll = (req, res) => {
  Proveedor.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error al obtener proveedores." }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  // include: ["productos"] mapea la relación y trae los productos de este proveedor
  Proveedor.findByPk(id, { include: ["productos"] }) 
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({ message: `No se encontró el Proveedor con id=${id}.` });
    })
    .catch(err => res.status(500).send({ message: "Error recuperando Proveedor con id=" + id }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Proveedor.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Proveedor actualizado con éxito." });
      else res.send({ message: `No se pudo actualizar el Proveedor con id=${id}.` });
    })
    .catch(err => res.status(500).send({ message: "Error actualizando Proveedor con id=" + id }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Proveedor.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Proveedor eliminado con éxito." });
      else res.send({ message: `No se pudo eliminar el Proveedor con id=${id}.` });
    })
    .catch(err => res.status(500).send({ message: "Error eliminando Proveedor con id=" + id }));
};