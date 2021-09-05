


//    Topic as  file:   server .js  //
//    Authur: suman 
//    Date:   11/05/2021        // 

const mongoose =require ('mongoose')
const OrdersSchema = new mongoose.Schema({

         number : { type :Number, required : true },
         customerId: { type :Number, required : true },
         paymentId: { type :Number, required : true },
         dispatchId: { type :Number, required : true },
         partnerId: { type :Number, required : true },
         shopId: { type :Number, required : true },
         invoiceAmount: { type :Number, required : true },
         invoiceAmountNet: { type :Number, required : true },
         invoiceShipping: { type :Number, required : true },
         invoiceShippingNet: { type :Number, required : true },
         orderTime: { type :Date, required : true,default:Date.now },
         transactionId: { type :Number, required : true },
         comment: { type :String, required : true },
         customerComment: { type :String, required : true },
         internalComment: { type :String, required: true },
         net: { type :Number, required : true },
         taxFree: { type :Number, required : true },
         temporaryId: { type :Number, required : true },
         referer: { type :Number, required : true },
         clearedDate: { type :Date, required : true,default:Date.now},
         trackingCode: { type :Number, required : true },
         languageIso: { type :Number, required : true },
         currency: { type :Number, required : true },
         currencyFactor: { type :Number, required : true },
         remoteAddress: { type :Number, required : true },
         paymentStatusId: { type :Number, required : true },
         orderStatusId: { type :Number, required : true } 
}, {
    timestamps:true,
    }); 

    module.exports = mongoose.model('orders',OrdersSchema)