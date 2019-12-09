const OwnersRepository = module.exports;
const DB = require('../utils/DB');

OwnersRepository.countOwnerBYDocument= async (doc)=> await DB('owner').count('*').where({document:doc}).first();

OwnersRepository.createOwner = async (owner)=>await DB('owner').insert(owner).returning('*');

OwnersRepository.findUserByDocument = async (doc)=> await DB('owner').where({document:doc}).select('*');