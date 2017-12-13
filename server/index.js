
require('dotenv').config({
    path:"./.env"
});

let express = require('express'),
    app = express(),
    port = process.env.PORT,
    path = require('path'),
    bodyParser = require('body-parser');



    

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log('server up on port:', port);
});//end of listen

app.get('/', (req,res) => {

    console.log('Main url HIT')
    res.sendFile(path.resolve('public/view/index.html'));


});//enf og get