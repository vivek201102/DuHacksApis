const prizes = require('../model/prizes');

exports.getAll = async (req, res) => {
    await prizes.find({})
    .then((response) => {
        res.status(200).json({ data: response })
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
}

exports.getOne = async (req, res) => {
    const id = req.params.id;
    await prizes.findById(id)
    .then((response)=>{
        res.status(200).json({data: response});
    })
    .catch((err)=>{
        res.status(500).json({message: err});
    });
}