const mongoose=require("mongoose");


const dbURL="mongodb+srv://harsh:eLF184EBXUVxUqJv@cluster0.hdu6dfb.mongodb.net/?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(dbURL,connectionParams).then(()=>{
    console.log("database connected");
}).catch((e)=>{
    console.log("no connection");
})
// mongoose.connect("mongodb://localhost:27017/ecommerce_db").then(()=>{
//     console.log("database connected");
// }).catch((e)=>{
//     console.log("no connection");
// });