const fs = require('fs')
const express = require('express');
const app = express();


app.post('/createfile', function (req, res) {
    var timestamp = new Date().toISOString();
    var filename = `${timestamp}.txt`
    var fileContent = `${timestamp} - timestamp created`
    fs.writeFile(`./output/${filename}`, fileContent, function (err, data) {
        if (err) throw err;
        console.log('filecreated')
    })
    res.json({ "message": "success" })
})

app.get('/read',function(req,res){
    fs.readdir('./output',function(err,data){
        if(err) throw err;
        res.json({data})
    })
})
app.listen(8000)