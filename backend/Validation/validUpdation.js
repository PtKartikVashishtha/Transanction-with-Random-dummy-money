const zod = require("zod") ;

const schemaForUpdation = zod.object({
    firstName : zod.string() ,
    lastName : zod.string() ,
    password : zod.string()
}) ;
module.exports = schemaForUpdation ;