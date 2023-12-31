const userModels = require("../models/usersModels");

const obtenerUsuarios = async () => {
	const users = await userModels.obtenerUsuarios();
	return users;
};

const iniciarSesion = async (body) => {
	const login = await userModels.iniciarSesion(body);
	return login;
};

const registrarUsuario = async (body) => {
	const register = await userModels.registrarUsuario(body);
	return register;
};

const borrarUsuario = async (id) => {
	const deleteUser = await userModels.borrarUsuario(id);
	return deleteUser;
};

module.exports = {
	obtenerUsuarios,
	registrarUsuario,
	iniciarSesion,
	borrarUsuario,
};
