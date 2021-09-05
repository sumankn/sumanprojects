
const mongoose  = require ('mongoose')
const {Pool}  = require('pg')
const pool = new Pool({                                                             //  postgresqil  db connection
        host :"localhost",
        port:"5432",
        user:"postgres", 
        password:"suman",  
        database:"Product1DB" 
})  
pool
   .connect()
   .then(pool => {
   // console.log('sql connected')
  })
  .catch(err => console.error('error connecting',  err.stack))
  .catch(err => console.error('sql connect Failed \n Error :' + JSON.stringify(err,undefined,2))
  .then(() => pool.end())
  ) 
mongoose                                                                                //  mongo db database connection
  .connect('mongodb://localhost:27017/productDB',{
   useCreateIndex:true,   
   useNewUrlParser: true,
   useUnifiedTopology: true
})
 .then(() => {    
     console.log("mongodb connected")   
})
.catch((error)  =>  {
    console.log("error")  
});
   

module.exports 