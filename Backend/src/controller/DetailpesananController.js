const Detailpesanan = require('../models/Detailpesanan');
const Detailpesanan = require('../models/Detailpesanan');
const Detailpesanan = require('../models/Detailpesanan');
const Detailpesanan = require('../models/Detailpesanan');
const Detailpesanan = require('../models/Detailpesanan');
const Detailpesanan = require('../models/Detailpesanan');

const createDetailpesanan = async (req,res) => {
    try {
        const {id} = req.body;
        if (!id) {
            return res.status(400).json({msg : 'id barang tidak ditemukan'})
        }

        const Detailpesanan = await Detailpesanan.create({id})
        res.status(201).json(Detailpesanan);
    }catch (error){
        res.status(500).json({msg : 'Server Error njir', error : error.message});
    }
};

const getAllDetailpesanan  = async (req,res) => {
    try {
        const Detailpesanan  =await Detailpesanan.findAll();
        res.status(200).json(Detailpesanan);
    }catch (error){
        res.status(500).json({msg : 'server Error', error:error.message});
    
    }
};

const getDetailpesananById = async (req,res) => {
    try {
        const Detailpesanan = await Detailpesanan.findByPk(req.params.id) ;
        if (!Detailpesanan) {
            return res.status(404).json({msg:'server Error', error:error.message });
        }
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
};

const updateDetailpesanan = async (req,res) => {
    try {
        const {id} = req.body;
        const Detailpesanan = await Detailpesanan.findByPk(req.params.id);

    }
    catch (error) {
        res.status(500).json({msg: 'server error', error: error.message});

    }
}

const deleteDeteilpesanan = async (req,res) => {
    try {
        const Detailpesanan = await Detailpesanan.findByPk(req, params.id);

        if(!Detailpesanan){
            return res.status(404).json({msg: 'Barang berhasil dihapus'});
        }
    } catch (error) {
        res.status(500).json({msg: 'server error', error: error.message});
    }
};

module.exports ={
    createDetailpesanan,
    getAllDetailpesanan,
    getDetailpesananById,
    updateDetailpesanan,
    deleteDeteilpesanan
};