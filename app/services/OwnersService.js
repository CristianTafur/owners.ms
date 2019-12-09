const OwnersService = module.exports;
const OwnersRepository = require('../repositories/OwnersRepository');
const Response = {}; 
OwnersService.login= (owner)=>{
     
}

OwnersService.signin= async (owner) => {
   Response.status=400;
   try {
      let res = await OwnersRepository.countOwnerBYDocument(owner.document);
      
      
      if (res.count==0) {
         owner.idRoles=3;
         res = await OwnersRepository.createOwner(owner); 
         Response.status=200;
         Response.body =res[0];
         
      }else{
         Response.status=401;
         Response.status=200;
         Response.body ={};
      }
      return Response;  
   } catch (error) {
      console.log("if uno",res.count==0);
      return reponse;
   }
}

OwnersService.getowners= (owner)=>{
    
}

OwnersService.findownerById= (id)=>{
     
}

OwnersService.updateowner= (id,owner)=>{
     
}
OwnersService.deletesowner= (id)=>{
    
}