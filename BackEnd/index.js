import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import cors from 'cors';

dotenv.config();
const app = express();
const PORT  = process.env.PORT || 8001;


app.use(express.json())
app.use(cors());
//connect to mongodb
try{
     mongoose.connect(process.env.MONGOURL,
        // useNewUrlParser:true,
        // useUnifiedTopology:true
     );
     console.log("connected to mongodb")
}catch(err)
{
    console.log(err);
}

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.use('/book',bookRoute)
app.use('/user',userRoute);

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`)
})