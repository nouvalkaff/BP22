//Program utama untuk jalanin server

const express = require('express');
// const logger = require('morgan')
const bp = require('body-parser')

const PORT = 6969;
// const dataSource = require('./wadahData.json')
const appRoutes = require("./routes/app_routes.js")
const todoRoutes = require("./routes/todoRoutes.js")

// const fs = require('fs')
const app = express();

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
// app.use(logger('dev'));

app.use("/todos", appRoutes);
app.use("/todo", todoRoutes);

app.listen(PORT, (err) => {
    if(err){throw Error}
    else {console.log(`Server is running on localhost:${PORT}`)}
})

// app.get('/aktivitas', (req, res) => {
//     res.status(200).send({
//         statusCode: 200,
//         statusText: "Success",
//         message: "GET data success",
//         data: dataSource
//     })
// });

// app.post('/buat-aktivitas', (req, res) => {
//     // const uuid = faker.datatype.uuid();
//     fs.readFile('./wadahData.json', (err, data) => {
//     if(!err) {
//         let json = JSON.parse(data);
//         json.push({
//             id: uuid,
//             ...req.body
//         })
//         var dataBaru = JSON.stringify(json, null, 1);
//     }
    
//     fs.writeFile('./wadahData.json', dataBaru, 'utf8', (err) => {
//         if (err) {throw Error}
//         else {res.status(200).send({
//                 statusCode: 200,
//                 statusText: "Success",
//                 message: `Aktivitas '${req.body.Aktivitas}' berhasil dicatat`
//             })}
//         })
//     })
// })

// app.put('/aktivitas/:id', (req, res) => {
//     fs.readFile('./wadahData.json', (err, data) => {
//         let json = JSON.parse(data);
//         let oldData = "";
//         let newData = "";

//         if(!err) {
//             var updateData = json.map(item => {
//             oldData = item.Aktivitas;
//             if (item.id === req.params.id) {
//                 item.Aktivitas = req.body.Aktivitas || item.Aktivitas
//                 item.Waktu = req.body.Waktu || item.Waktu
//                 item.Status = req.body.Status || item.Status
//                 item.Ulangi = req.body.Ulangi || item.Ulangi
//             }
//                 newData = item.Aktivitas;;
//                 return item;
//         })
//     }

//     let dataUpd = JSON.stringify(updateData, null, 1);
//     fs.writeFile('./wadahData.json', dataUpd, 'utf8', (err) => {
//         if(err) {throw Error}
//         else {res.status(200). send({
//                 statusCode: 200,
//                 statusText: "Success",
//                 message: `Aktivitas '${oldData}' berhasil diganti menjadi '${newData}'.`
//             })}
//         })
//     })
// })

// app.delete('/aktivitas/:id', (req, res) => {
//     fs.readFile('./wadahData.json', (err, data) => {
//         let json = JSON.parse(data);
//         let dataHilang = "";

//         if(!err) {
//             var lagiDelete = json.filter(dilet => {
//                 let prosesDelete = !(dilet.id === req.params.id)
//                 if (!prosesDelete) {
//                     dataHilang = dilet.Aktivitas
//                 }
//                 return prosesDelete;
//             })
//         }
        
//     let listBaru = JSON.stringify(lagiDelete, null, 1)
//     fs.writeFile('./wadahData.json', listBaru, 'utf8', (err) => {
//         if(err) {throw Error}
//         else (res.status(200).send({
//                 statusCode: 200,
//                 statusText: "Success",
//                 message: `Aktivitas '${dataHilang}' berhasil dihapus.`
//             }))
//         })
//     })
// })