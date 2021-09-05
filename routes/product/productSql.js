

//    Topic as  file:   productsql.js  //
//    Authur: suman 
//    Date:   07/05/2021        // 

const express  = require('express');
const router = express.Router()
router.use(express.json())
const { Pool } = require('pg')

const pool = new Pool({                                                                                                     //  postgresqil  db connection
  host :"localhost",
  port:"5432",
  user:"postgres", 
  password:"suman",  
  database:"Product1DB" 
})  

 // get the products
  router.get("/api/product1/view", async function(req, res, next) {
    try {
      const results = await pool.query("SELECT * FROM products ");
      return res.json(results.rows);
    } catch (err) {
      return next(err);
    }
  });
 // add the all the products
  router.post("/api/product1/add", async function(req, res, next) {
    try {
      const result = await pool.query(
        "INSERT INTO products (productname,packagedimensions,productsize,brandname,packaging,productweight,statusproduct,productimage,title,availabilityproduct,offerdiscount,producttype,productcolor,country,maintenance,warranty,channaltype,availabilitydate) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18) RETURNING *",
        [req.body.productname, req.body.packagedimensions,req.body.productsize,req.body.brandname,req.body.packaging,req.body.productweight,req.body.statusproduct,req.body.productimage,req.body.title,req.body.availabilityproduct,req.body.offerdiscount,req.body.producttype,req.body.productcolor,req.body.country,req.body.maintenance,req.body.warranty,req.body.channaltype,req.body.availabilitydate]
      );
      return res.json(result.rows[0]);
    } catch (err) {
      return next(err);
    }
  });
  
// update all the products
router.put("/api/product1/edit/:id", async function(req, res, next) {
  try {
    const result = await pool.query(
      "UPDATE products SET productname=$1,packagedimensions=$2,productsize=$3,brandname=$4,packaging=$5,productweight=$6,statusproduct=$7,productimage=$8,title=$9,availabilityproduct=$10,offerdiscount=$11,producttype=$12,productcolor=$13,country=$14,maintenance=$15,warranty=$16,channaltype=$17,availabilitydate=$18 WHERE id=$19 RETURNING *",
      [req.body.productname, req.body.packagedimensions,req.body.productsize,req.body.brandname,req.body.packaging,req.body.productweight,req.body.statusproduct,req.body.productimage,req.body.title,req.body.availabilityproduct,req.body.offerdiscount,req.body.producttype,req.body.productcolor,req.body.country,req.body.maintenance,req.body.warranty,req.body.channaltype,req.body.availabilitydate, req.params.id]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
   //delete products 
   router.delete("/api/product1/delete/:id", async function(req, res, next) {
    try {
      const result = await pool.query("DELETE FROM products WHERE id=$1", [
        req.params.id
      ]);
      return res.json({ message: "Deleted" });
    } catch (err) {
      return next(err);
    }
  });

module.exports = router

