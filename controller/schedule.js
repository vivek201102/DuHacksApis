const schedule = require('../model/schedule');

exports.getAll = async (req, res) => {
    const allSchedule = await schedule.find({})
    .then((response)=>{
        res.status(200).json({data: response});
    })
    .catch((err)=>{
        res.status(500).json({message: err});
    });
}

exports.getOne = async (req, res) => {
    const id = req.params.id;
    await schedule.findById(id)
    .then((response)=>{
        res.status(200).json({data: response});
    })
    .catch((err)=>{
        res.status(500).json({message: err});
    });
}