

//    Topic as  file:   producttypessql.js  //
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
    // get the productstypes 
  router.get("/api/producttype1/view", async function(req, res, next) {
    try {
      const results = await pool.query("SELECT * FROM typeofproducts ");
      return res.json(results.rows);
    } catch (err) {
      return next(err);
    }
  });
 // add the all the productstypes
  router.post("/api/producttype1/add", async function(req, res, next) {
    try {
      const result = await pool.query(
        "INSERT INTO typeofproducts (productype,salesforce,title,salespriceeffectivedate,productcategory,gtin,itemgroupid,material, mpn,pattern,price ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
        [req.body.productype,req.body.salesforce,req.body.title,req.body.salespriceeffectivedate,req.body.productcategory, req.body.gtin,req.body.itemgroupid,req.body.material, req.body.mpn,req.body.pattern,req.body.price]
      );
      return res.json(result.rows[0]);
    } catch (err) {
      return next(err);
    }
  });

// update all the productstypes
router.put("/api/producttype1/edit/:id", async function(req, res, next) {
  try {
    const result = await pool.query(
      "UPDATE typeofproducts  SET productype=$1,salesforce=$2,title=$3,salespriceeffectivedate=$4,productcategory=$5,gtin=$6,itemgroupid=$7,material=$8, mpn=$9,pattern=$10,price=$11 WHERE id=$12 RETURNING *",
      [req.body.productype,req.body.salesforce,req.body.title,req.body.salespriceeffectivedate,req.body.productcategory,req.body.gtin,req.body.itemgroupid,req.body.material, req.body.mpn,req.body.pattern,req.body.price,req.params.id]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

   //delete products 
   router.delete("/api/producttype1/delete/:id", async function(req, res, next) {
    try {
      const result = await pool.query("DELETE FROM typeofproducts  WHERE id=$1", [
        req.params.id
      ]);
      return res.json({ message: "Deleted" });
    } catch (err) {
      return next(err);
    }
  });

module.exports = router
