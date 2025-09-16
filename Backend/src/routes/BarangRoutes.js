const express = require('express');
const router = express.Router();
const {
    createBarang,
    getAllBarang,
    getBarangById,
    updateBarang,
    deleteBarang
} = require('../controller/BarangController');

router.route('/').
    post(createBarang).
    get(getAllBarang);
router.route('/:id').   
    get(getBarangById).
    put(updateBarang).
    delete(deleteBarang);

module.exports = router;
