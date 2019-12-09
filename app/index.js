const express = require('express');
const app = express();
 
const morgan=require('morgan'); 
app.set('port',process.env.PORT||4000);
app.use(express.json());
app.use(morgan('dev'));
app.use('/owners',require('./routes/OwnersRoutes'));
app.listen(app.get('port'),()=>{
    console.log(`http://localhost:${app.get('port')}/users`); 
});