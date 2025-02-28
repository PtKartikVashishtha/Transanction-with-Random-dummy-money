const express = require("express") ;
const mainRouter = require("./routes/index");
const app = express() ;
const cors = require("cors");
const bodyParser = require("body-parser") ;
const PORT = 3000 ;

app.use(cors()) ;
app.use(bodyParser.json()) ;

app.use('/api/v1' , mainRouter) ;

app.listen(PORT , () => {
    console.log("Server Started ON Port 3000") ;
})