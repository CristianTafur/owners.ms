const validator=module.exports; 
validator.syntax=(obj,schema)=>{
    const errors=[]; 
        schema.forEach(element => { 
           if(element.require){
            if (!obj[element.name])  
                errors.push(element);
            else 
            if (element.typeof=='number'){ 
                if (!parseFloat(obj[element.name]))
                    errors.push(element); 
            }  
            else
                 if ( typeof obj[element.name]!=element.typeof)
                    errors.push(element); 
            }  
            //console.log(obj[element.name], typeof obj[element.name]);
            
        }); 
        if(errors.length>0)
            throw {schema:errors};
};
