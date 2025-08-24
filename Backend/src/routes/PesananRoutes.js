const express = require('express')
const router = express.Router();
const {
    createPesanan,
    getAllPesanan,
    getPesananById,
    updatePesanan,
    deletePesanan,

} = require('../controller/PesananController');

router.route('/')
    .post(createPesanan)
    .get(getAllPesanan);

router.route('/:id')
    .get(getPesananById)
    .put(updatePesanan)
    .delete(deletePesanan);

module.exports = router;