const User = require('../models/User');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ msg: 'Semua field harus diisi' });
        }
        const user = await User.create({ username, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

const getAllUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User tidak ditemukan' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
}; 

const updateUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User tidak ditemukan' });
        }
        user.username = username;
        user.email = email;
        user.password = password;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User tidak ditemukan' });
        }
        await user.destroy();
        res.status(200).json({ msg: 'User berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
};
