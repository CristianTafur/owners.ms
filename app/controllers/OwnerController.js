const OwnerController = module.exports;
const OwnersService = require('../services/OwnersService');
const Validator = require('../validators/Validator');
const SinginShema = require('../validators/SinginShema');
OwnerController.login= (req,res)=>{
    res.status(200).json(req.body);
}

OwnerController.signin= async (req,res)=>{
    const { body } = req;
    try {
        Validator.syntax(body,SinginShema);
        const response =await OwnersService.signin(body);
        res.status(response.status).json(response.body);
    } catch (error) {
        res.status(400).json(error);
    } 
}

OwnerController.getOwners= (req,res)=>{
    res.status(200).json({Owners:[]});
}

OwnerController.findOwnerById= (req,res)=>{
    res.status(200).json(req.params)
}

OwnerController.updateOwner= (req,res)=>{
    res.status(200).json({paramas:req.params,body:req.body});
}
OwnerController.deletesOwner= (req,res)=>{
    res.status(200).json(req.params)
}