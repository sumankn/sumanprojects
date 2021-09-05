

//    Topic as  file:   sql //
//    Authur: suman 
//    Date:   11/05/2021        // 



CREATE DATABASE   Product1DB;

CREATE TABLE products; (
     ID BIGSERIAL PRIMARY KEY,
     productname VARCHAR(50) NOT NULL,
     packagedimensions VARCHAR(50)NOT NULL,
     productsize INT NOT NULL,
     brandname  VARCHAR(50) NOT NULL,
     packaging VARCHAR(50)NOT NULL,
     productweight INT NOT NULL,
     statusproduct VARCHAR(50)NOT NULL,     
     productimage VARCHAR(50)NOT NULL,
     title  VARCHAR(50)NOT NULL,
     availabilityproduct VARCHAR(50)NOT NULL,
     offerdiscount INT NOT NULL,
     producttype  VARCHAR(50)NOT NULL,
     productcolor VARCHAR(50)NOT NULL,
     country VARCHAR(50)NOT NULL,
     maintenance VARCHAR(50)NOT NULL,
     warranty VARCHAR(50)NOT NULL,
     channaltype VARCHAR(50)NOT NULL,
     availabilitydate  Date  NOT NULL);
);

CREATE TABLE  typeofproducts (
     ID BIGSERIAL  PRIMARY KEY,
     productype VARCHAR(50)NOT NULL,
     salesforce  VARCHAR(50)NOT NULL,
     title  VARCHAR(50)NOT NULL,
     salesPriceEffectiveDate DATE NOT NULL,
     ProductCategory VARCHAR(50)NOT NULL,
     gtin  VARCHAR(50)NOT NULL,
     itemGroupId INT NOT NULL,
     material  VARCHAR(50)NOT NULL,
     mpn  VARCHAR(50)NOT NULL,
     pattern INT NOT NULL,
     price NUMERIC NOT NULL);
);

  CREATE TABLE  orders  (
        ID BIGSERIAL  PRIMARY KEY,
         ordernumber INT,
         customerid INT,
         paymentid INT,
         dispatchid  INT,
         partnerid INT,
         shopid INT,
         invoiceamount INT,
         invoiceamountnet INT,
         invoiceshipping INT,
         invoiceshippingnet INT,
         ordertime DATE ,
         transactionid INT ,
         comment VARCHAR(50) ,
         customercomment VARCHAR(50),
         internalcomment VARCHAR(50),
         net INT,
         taxfree INT,
         temporaryid INT ,
         referer VARCHAR(50),
         cleareddate DATE,
         trackingcode INT,
         languageIso INT,
         currency INT,
         currencyfactor INT,
         remoteaddress INT,
         paymentstatusId INT,
         orderstatusId INT );
);

     CREATE TABLE  inventoryproducts (
          ID BIGSERIAL PRIMARY KEY,
          barcode INT,                        
          price INT,
          countrycodeoforigin INT,
          harmonizedsystemcode INT,
          tracked INT,
          locationid INT,
          countryharmonizedsystemcodes INT,
          compareatprice INT,
          fulfillmentservice VARCHAR(50),
          grams INT,
          inverntoryid INT,
          imageid INT,
          productid INT,
          requiresshipping VARCHAR(50),
          sku INT,
          taxable INT,
          taxcode INT,
          title VARCHAR(50),
          inventoryitemid INT,
          inventoryavailability INT,
          salePrice INT,
          salePriceEffectiveDate DATE,
          quantity INT,
          sellOngooglequantity INT,
          installment VARCHAR(50),
          loyaltyPoints INT,
          pickup VARCHAR(50),
          instoreproductlocation VARCHAR(50),
          customlabel0 VARCHAR(50),
          customlabel1 VARCHAR(50),
          customlabel2 VARCHAR(50),
          customlabel3 VARCHAR(50),
          customlabel4 VARCHAR(50) );
);



