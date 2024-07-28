const catchError = require('../utils/catchError');
const User = require('../models/users.Models');

// Get All
const getAll = catchError(async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return !user ? res.status(404).json({ msg: 'Nada q Mostrar' }) : res.json(user);
});

// POST
const create = catchError(async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).json(user);
});

// UPDATE
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const user = await User.update(req.body, { where: { id }, returning: true });
    return user[0] === 0 ? res.sendStatus(404) : res.json(user[1][0]);
});

// DELETE
const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const user = await User.destroy({ where: { id } });
    return !user ? res.status(404).json({ msg: 'Nada Para mostrar' }) : res.status(204).json({ msg: 'Dato Eliminado con Exito' });
});

module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
};
