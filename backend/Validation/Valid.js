const zod = require("zod") ;

const schema = zod.object({
    userName : zod.string() ,
    firstName : zod.string() ,
    lastName : zod.string() ,
    password : zod.string()
}) ;
module.exports = schema ;