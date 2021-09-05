module.exports = app => {
    const typeofproductssqlRouter = require ('../routes/product/typrofproductssql.js')
    var router = require("express").Router();

     // Retrieve all Products
     router.get("/api/producttype1/view",producttype1.findAll);
  
    // Create a new Products
     router.post("/api/producttype1/add",producttype1.create);
  
    // Update a products with id
     router.put("/api/producttype1/edit/:id",producttype1.update);
  
    // Delete a product  with id

    router.delete("/api/producttype1/:id",producttype1.delete);
  
     app.use('/api/typeofproductssql', router);

};