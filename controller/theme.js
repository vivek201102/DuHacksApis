const theme = require("../model/theme");

exports.getAll = async (req, res) => {
    await theme.find({})
    .then((response) => {
        res.status(200).json({ data: response })
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
}

exports.getOne = async (req, res) => {
    const id = req.params.id;
    await theme.findById(id)
    .then((response)=>{
        res.status(200).json({data: response});
    })
    .catch((err)=>{
        res.status(500).json({message: err});
    });
}