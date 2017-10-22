const express = require('express');
const app = express();
const path = require('path');
const APP_PORT = 4100;

app.use(express.static(__dirname+'/dist'));
app.listen(APP_PORT);
app.get('/*', function(req,res){
	res.sendFile(path.join(__dirname+'/dist/index.html'));
})

console.log('BlueBox is On Port '+ APP_PORT)