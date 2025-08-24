const express = require('express')
const router = express.Router();

const {
    createDetailpesanan,
    getAllDetailpesanan,
    getDetailpesananById,
    updateDetailpesanan,
    deleteDeteilpesanan
} = require('../controller/Detailpesanan');

router.route('/')
    .post(createDetailpesanan)
    .get(getAllDetailpesanan);

router.route('/:id')
    .get(getDetailpesananById)
    .put(updateDetailpesanan)
    .delete(deleteDeteilpesanan);

module.exports = router;
