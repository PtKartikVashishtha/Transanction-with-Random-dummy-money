const schemaForUpdation = require("../Validation/validUpdation")

const checkSchemaForUpdation = (req , res , next) => {
    const schema = schemaForUpdation ;
    const response = schema.safeParse(req.body) ;
    if(response.success){
        next() ;
    }
}

module.exports = checkSchemaForUpdation ;