const express = require('express');
const router = express.Router();    
const {
    createKategori,
    getAllKategori,
    getKategoriById,
    updateKategori,
    deleteKategori
} = require('../controller/KategoriiController');

router.route('/').
    post(createKategori).
    get(getAllKategori);
router.route('/:id').
    get(getKategoriById).
    put(updateKategori).
    delete(deleteKategori);

module.exports = router;
