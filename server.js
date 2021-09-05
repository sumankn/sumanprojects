//    Topic as  file:   server  //
//    Authur: suman 
//    Date:   12/05/2021        // 

const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const config  = require('./assets/config/config')

const app = express(); 
const PORT = 5000;
           
//adding morgan to log HTTP requests
 app.use(morgan('combined'));

//intialize body body-parser middleweares
 app.use(bodyParser.json())
   bodyParser.urlencoded({
     extended: true,
   })
                     
//intialize body body-parser middleweares 
 app.use(express.json())
 app.get('/', (req,res) => {
 });

 // intializing routes 
  const productRouter = require('./routes/product/products')
  const productSqlRouter = require('./routes/product/productSql')
  const producttypesRouter = require('./routes/product/producttypes')
  const typrofproductssqlRouter = require('./routes/product/typrofproductssql')
  const ordersRouter = require('./routes/orders/orders')
  const ordersqlRouter = require('./routes/orders/ordersql')
  const InventryproductRouter = require('./routes/inventryproducts/inventryproduct')
  const inventryproductsqlRouter = require('./routes/inventryproducts/inventryproductsql')

  app.use('/', require('./routes/product/products'));
  app.use('/', require('./routes/product/productSql'))                
  app.use('/', require('./routes/product/producttypes'))
  app.use('/', require('./routes/product/typrofproductssql')) 
  app.use('/', require('./routes/orders/orders'))
  app.use('/', require('./routes/orders/ordersql')) 
  app.use('/', require('./routes/inventryproducts/inventryproduct')) 
  app.use('/', require('./routes/inventryproducts/inventryproductsql')) 

     
  app.listen(5000)    
     