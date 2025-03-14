const exp=require('express')
const app=exp();
const mongoose=require('mongoose')
require('dotenv').config()

const port =process.env.PORT || 4000;

app.use(exp.json());

const userapp=require('./APIs/userapi')
const adminapp=require('./APIs/adminapi')
const authorapp=require('./APIs/authorapi')

mongoose.connect(process.env.DBURL)
.then(()=>{
    app.listen(port,()=>{
        console.log("server is listening on port")
        console.log('DB CONNECTION SUCCESS')}
    )
}
).catch(err=>console.log("error occured",err))


app.use('/user-api',userapp);
app.use('/admin-api',adminapp);
app.use('/author-api',authorapp);



// ERROR handling 

// app.use((err,req,res)={

// })

// const exp=require('express')
// const app=exp();

// //const PORT=100

// require('dotenv').config();
// const port=process.env.PORT || 4000;

// app.listen(port,()=>{

// })
