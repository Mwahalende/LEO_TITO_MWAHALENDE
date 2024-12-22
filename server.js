const express=require('express');
//const { get } = require('mongoose');
const app=express();
app.set('views engine','ejs')
app.use(express.static('public'));
app.get('/',(req,res)=>{
res.render('page.ejs')
    })
app.get('/net',(req,res)=>{
const path=__dirname  + "/CCTVBOOKS/Network Design Basics.TXT.pdf"
res.sendFile(path);
})
app.get('/network',(req,res)=>{
    const path=__dirname  + "/CCTVBOOKS/Network Design Basics.TXT.pdf"
    res.sendFile(path);
    })
    app.get('/Analogue',(req,res)=>{
        const path=__dirname  + "/CCTVBOOKS/OT01 Hikvision Turbo HD Analog Solution.pdf"
        res.sendFile(path);
        })
    app.get('/Ipcamera',(req,res)=>{
            const path=__dirname  + "/CCTVBOOKS/OT02 Hikvision IP Camera.pdf"
            res.sendFile(path);
            })
    app.get('/NVR',(req,res)=>{
                const path=__dirname  + "/CCTVBOOKS/OT03Hikvision NVR Operation.pdf"
                res.sendFile(path);
})
app.get('/BTS',(req,res)=>{
    const path=__dirname  + "/BTS BOOK/What is a Base Transceiver Station.pdf"
    res.sendFile(path);
})
app.get('/COMPUTER',(req,res)=>{
    const path=__dirname  + "/COMPUTER_BOOK/M=COMPUTER2.pdf"
    res.sendFile(path);
})
app.get('/MYCV',(req,res)=>{
    const path=__dirname  + "/MYCV/MYCV.pdf"
    res.sendFile(path);
})
app.listen(5000,(req,res)=>{
console.log("the server running at port 5000 go to browser and enjoy")
})
