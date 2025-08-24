const Baranng = require('../models/Barang')

const createBarang = async(req,res)=>{
    try {
        const {nama, kategori_id, harga, stok} = req.body;
        if (!nama) {
            return res.status(400).json({msg: 'Nama barang tidak boleh kosong'})
        }
        const barang = await Baranng.create({nama, kategori_id, harga, stok});
        res.status(201).json(barang);
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

const getAllBarang = async(req,res)=>{
    try {
        const barang = await Baranng.findAll();
        res.status(200).json(barang);
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

const getBarangById = async(req,res)=>{
    try {
        const barang = await Baranng.findByPk(req.params.id);
        if (!barang) {
            return res.status(404).json({msg: 'Barang tidak ditemukan'})
        }
        res.status(200).json(barang);
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}
const updateBarang = async (req,res) => {
    try {
        const {nama, kategori_id, harga, stok} = req.body;
        const barang = await Baranng.findByPk(req.params.id);
        if (!barang) {
            return res.status(404).json({msg: 'Barang tidak ditemukan'})
        }
        barang.nama = nama;
        barang.kategori_id = kategori_id;
        barang.harga = harga;
        barang.stok = stok;
        await barang.save();
        res.status(200).json(barang);
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

const deleteBarang = async (req,res) => {
    try{
        const Barang = await Baranng.findByPk(req.params.id);
        if (!Barang) {
            return res.status(404).json({msg: 'Barang tidak ditemukan'})
        }
        await Barang.destroy();
        res.status(200).json({msg: 'Barang berhasil dihapus'})
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

module.exports = {
    createBarang,
    getAllBarang,
    getBarangById,
    updateBarang,
    deleteBarang
};