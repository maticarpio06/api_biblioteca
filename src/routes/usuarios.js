const express = require("express");
const router = express.Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/userController");


// Importa la librería para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los usuarios (requiere alcance "read:usuarios")
router.get("/", requiredScopes("read:usuarios"), getUsers);

// Ruta para obtener un usuario por su ID (requiere alcance "read:usuarios")
router.get("/:id", requiredScopes("read:usuarios"), getUserById);

// Ruta para crear un nuevo usuario (requiere alcance "write:usuarios")
router.post("/", requiredScopes("write:usuarios"), createUser);

// Ruta para actualizar un usuario existente (requiere alcance "write:usuarios")
router.put("/:id", requiredScopes("write:usuarios"), updateUser);

// Ruta para eliminar un usuario (requiere alcance "write:usuarios")
router.delete("/:id", requiredScopes("write:usuarios"), deleteUser);

module.exports = router;
