const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../controller/UserController');

router.route('/').
    post(createUser).
    get(getAllUser);
router.route('/:id').
    get(getUserById).
    put(updateUser).
    delete(deleteUser);

module.exports = router;
