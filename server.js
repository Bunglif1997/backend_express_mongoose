const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGO_URI} =require('./config')


//Router post 
const postsRouters = require('./routes/api/posts')
//GET All 
//Body-Parser
app.use(express.json());
//Connect Mongodb
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
.then(()=> console.log('Mongodb Connected'))
.catch(err => console.log(err))

//User router
app.use('/api/posts', postsRouters);
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server run at port ${PORT}`));

app.get('/',(req,res) => {
    res.send('Hellow Read ALl');
});