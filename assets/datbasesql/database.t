//    Topic as  file:   database Table  //
//    Authur: suman 
//    Date:   04/05/2021        // 
//    Table created  by postressql ///


************************************************************************************************************************************************************************************************

Product1DB=# \d products
                                          Table "public.products"
       Column        |         Type          | Collation | Nullable |               Default
---------------------+-----------------------+-----------+----------+--------------------------------------
 id                  | integer               |           | not null | nextval('products_id_seq'::regclass)
 productname         | character varying(30) |           |          |
 packagedimensions   | character varying(50) |           |          |
 productsize         | integer               |           |          |
 brandname           | character varying(50) |           |          |
 packaging           | character varying(50) |           |          |
 productweight       | integer               |           |          |
 statusproduct       | character varying(50) |           |          |
 productimage        | character varying(50) |           |          |
 title               | character varying(50) |           |          |
 availabilityproduct | character varying(50) |           |          |
 offerdiscount       | integer               |           |          |
 producttype         | character varying(50) |           |          |
 productcolor        | character varying(50) |           |          |
 country             | character varying(50) |           |          |
 maintenance         | character varying(50) |           |          |
 warranty            | character varying(50) |           |          |
 channaltype         | character varying(50) |           |          |
 availabilitydate    | date                  |           |          |
Indexes:
    "products_pkey" PRIMARY KEY, btree (id)





****************************************************************************************************************************************************************************************************




Product1DB-# \d typeofproducts
                                            Table "public.typeofproducts"
         Column          |         Type          | Collation | Nullable |                  Default
-------------------------+-----------------------+-----------+----------+--------------------------------------------
 id                      | integer               |           | not null | nextval('typeofproducts_id_seq'::regclass)
 productype              | character varying(30) |           |          |
 salesforce              | character varying(30) |           |          |
 title                   | character varying(30) |           |          |
 salespriceeffectivedate | date                  |           |          |
 productcategory         | character varying(50) |           |          |
 gtin                    | character varying(50) |           |          |
 itemgroupid             | integer               |           |          |
 material                | character varying(50) |           |          |
 mpn                     | character varying(50) |           |          |
 pattern                 | integer               |           |          |
 price                   | integer               |           |          |
Indexes:
    "typeofproducts_pkey" PRIMARY KEY, btree (id)
*********************************************************************************************************************************************************************************************