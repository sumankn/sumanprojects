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

 // get the order
  router.get("/api/order1/view", async function(req, res, next) {
    try {
      const results = await pool.query("SELECT * FROM orders ");
      return res.json(results.rows);
    } catch (err) {
      return next(err);
    }
  });
 // add the all the orders
  router.post("/api/order1/add", async function(req, res, next) {
    try {
      const result = await pool.query(
       "INSERT INTO orders (ordernumber,customerid,paymentid,dispatchid,partnerid,shopid,invoiceamount,invoiceamountnet,invoiceshipping,invoiceshippingnet,ordertime,transactionid,comment,customercomment,internalcomment,taxfree,temporaryid,referer,cleareddate,trackingcode,languageiso,currency,currencyfactor,remoteaddress,paymentstatusid,orderstatusid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26) RETURNING *",
        [req.body.ordernumber,req.body.customerid,req.body.paymentid,req.body.dispatchid,req.body.partnerid, req.body.shopid,req.body.invoiceamount,req.body.invoiceamountnet,req.body.invoiceshipping,req.body.invoiceshippingnet,req.body.ordertime,req.body.transactionid, req.body.comment,req.body.customercomment,req.body.internalcomment,req.body.taxfree,req.body.temporaryid,req.body.referer,req.body.cleareddate,req.body.trackingcode, req.body.languageiso,req.body.currency,req.body.currencyfactor,req.body.remoteaddress,req.body.paymentstatusid,req.body.orderstatusid]
      );
      return res.json(result.rows[0]);
    } catch (err) {
      return next(err);
    }
  });
  
// update all the orders
router.put("/api/order1/edit/:id", async function(req, res, next) {
  try {
    const result = await pool.query(
      "UPDATE orders SET ordernumber =$1,customerid=$2,paymentid=$3,dispatchid=$4,partnerid=$5,shopid=$6,invoiceamount=$7,invoiceamountnet=$8,invoiceshipping=$9,invoiceshippingnet=$10,ordertime=$11,transactionid=$12,comment=$13,customercomment=$14,internalcomment=$15,taxfree=$16,temporaryid=$17,referer=$18,cleareddate=$19,trackingcode=$20,languageiso=$21,currency=$22,currencyfactor=$23,remoteaddress=$24,paymentstatusid=$25,orderstatusid=$26 WHERE id=$27 RETURNING *",
      [req.body.ordernumber,req.body.customerid,req.body.paymentid,req.body.dispatchid,req.body.partnerid, req.body.shopid,req.body.invoiceamount,req.body.invoiceamountnet,req.body.invoiceshipping,req.body.invoiceshippingnet,req.body.ordertime,req.body.transactionid, req.body.comment,req.body.customercomment,req.body.internalcomment,req.body.taxfree,req.body.temporaryid,req.body.referer,req.body.cleareddate,req.body.trackingcode, req.body.languageiso,req.body.currency,req.body.currencyfactor,req.body.remoteaddress,req.body.paymentstatusid,req.body.orderstatusid, req.params.id]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

   //delete the orders
   router.delete("/api/order1/delete/:id", async function(req, res, next) {
    try {
      const result = await pool.query("DELETE FROM  orders WHERE id=$1", [
        req.params.id
      ]);
      return res.json({ message: "Deleted" });
    } catch (err) {
      return next(err);
    }
  });

module.exports = router