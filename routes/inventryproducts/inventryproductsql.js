
//    Topic as  file:   inventryproductsql .js  //
//    Authur: suman 
//    Date:   12/05/2021        // 


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

 // get the inventryproducts
  router.get("/api/inventryproducts1/view", async function(req, res, next) {
    try {
      const results = await pool.query("SELECT * FROM inventoryproducts");
      return res.json(results.rows);
    } catch (err) {
      return next(err);
    }
  });
 //add the all the inventryproducts
  router.post("/api/inventryproducts1/add", async function(req, res, next) {
    try {
      const result = await pool.query(
       "INSERT INTO  inventoryproducts(barcode,price,countrycodeoforigin,harmonizedsystemcode,tracked,locationid,countryharmonizedsystemcodes,compareatprice,fulfillmentservice,grams,inverntoryid,imageid,productid,requiresshipping,sku,taxable,taxcode,title,inventoryitemid,inventoryavailability,saleprice, salepriceeffectivedate,quantity,sellongooglequantity,installment,loyaltypoints,pickup,instoreproductlocation,customlabel0,customlabel1,customlabel2,customlabel3,customlabel4) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33) RETURNING *",
        [req.body.barcode,req.body.price,req.body.countrycodeoforigin,req.body.harmonizedsystemcode,req.body.tracked,req.body.locationid,req.body.countryharmonizedsystemcodes,req.body.compareatprice,req.body.fulfillmentservice,req.body.grams,req.body.inverntoryid,req.body.imageid,req.body.productid,req.body.requiresshipping,req.body.sku,req.body.taxable,req.body.taxcode,req.body.title,req.body.inventoryitemid,req.body.inventoryavailability,req.body.salePrice,req.body.salepriceeffectivedate,req.body.quantity,req.body.sellongooglequantity,req.body.installment,req.body.loyaltyPoints,req.body.pickup,req.body.instoreproductlocation,req.body.customlabel0,req.body.customlabel1,req.body.customlabel2,req.body.customlabel3,req.body.customlabel4]
       );
      return res.json(result.rows[0]);
    } catch (err) {
      return next(err);
    }
  });
  
//update all the inventryproducts
router.put("/api/inventryproducts1/edit/:id", async function(req, res, next) {
  try {
    const result = await pool.query(
      "UPDATE inventoryproducts SET barcode=$1,price=$2,countrycodeoforigin=$3,harmonizedsystemcode=$4,tracked=$5,locationid=$6,countryharmonizedsystemcodes=$7,compareatprice=$8,fulfillmentservice=$9,grams=$10,inverntoryid=$11,imageid=$12,productid=$13,requiresshipping=$14,sku=$15,taxable=$16,taxcode=$17,title=$18,inventoryitemid=$19,inventoryavailability=$20,saleprice=$21,salepriceeffectivedate=$22,quantity=$23,sellongooglequantity=$24,installment=$25,loyaltypoints=$26,pickup=$27,instoreproductlocation=$28,customlabel0=$29,customlabel1=$30,customlabel2=$31,customlabel3=$32,customlabel4=$33 WHERE id=$34  RETURNING *",
      [ req.body.barcode,req.body.price,req.body.countrycodeoforigin,req.body.harmonizedsystemcode,req.body.tracked,req.body.locationid,req.body.countryharmonizedsystemcodes,req.body.compareatprice,req.body.fulfillmentservice,req.body.grams,req.body.inverntoryid,req.body.imageid,req.body.productid,req.body.requiresshipping,req.body.sku,req.body.taxable,req.body.taxcode,req.body.title,req.body.inventoryitemid,req.body.inventoryavailability,req.body.salePrice,req.body.salepriceeffectivedate,req.body.quantity,req.body.sellongooglequantity,req.body.installment,req.body.loyaltyPoints,req.body.pickup,req.body.instoreproductlocation,req.body.customlabel0,req.body.customlabel1,req.body.customlabel2,req.body.customlabel3,req.body.customlabel4,req.params.id]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

//delete the inventryproducts
   router.delete("/api/inventryproducts1/delete/:id", async function(req, res, next) {
    try {
        const result = await pool.query("DELETE FROM inventoryproducts WHERE id=$1", [
          req.params.id
        ]);
        return res.json({ message: "Deleted" });
      } catch (err) {
        return next(err);
      }
    });

module.exports = router